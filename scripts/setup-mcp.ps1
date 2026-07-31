Write-Host "🚀 Configurando MCP para Windows..." -ForegroundColor Green

if (-not (Test-Path ".env.local")) {
    Copy-Item ".env.example" ".env.local"
    Write-Host "⚠️  Edite .env.local e adicione sua chave!" -ForegroundColor Yellow
    exit
}

# Carregar variável
Get-Content ".env.local" | ForEach-Object {
    if ($_ -match "CONTEXT7_API_KEY=(.+)") {
        $env:CONTEXT7_API_KEY = $matches[1]
    }
}

$configContent = @"
{
  "mcpServers": {
    "context7": {
      "command": "npx",
      "args": ["-y", "@upstash/context7-mcp"],
      "env": {
        "CONTEXT7_API_KEY": "$env:CONTEXT7_API_KEY"
      }
    }
  }
}
"@

# VSCode/Cursor
New-Item -ItemType Directory -Force -Path ".vscode"
$configContent | Out-File -FilePath ".vscode/mcp.json" -Encoding utf8
Write-Host "✓ VSCode/Cursor configurado" -ForegroundColor Green

# Claude Desktop (Windows)
$claudePath = "$env:APPDATA\Claude"
New-Item -ItemType Directory -Force -Path $claudePath
$configContent | Out-File -FilePath "$claudePath\claude_desktop_config.json" -Encoding utf8
Write-Host "✓ Claude Desktop configurado" -ForegroundColor Green

Write-Host "🎉 Configuração concluída!" -ForegroundColor Green
```

## 🎯 Resumo da Solução

### Problema Resolvido
✅ Variáveis de ambiente carregam corretamente
✅ Compatível com VSCode, Cursor, Trae, Claude Code e Claude Desktop
✅ Setup automatizado para toda a equipe
✅ Segurança: `.env.local` no gitignore

### Como a Equipe Usa

1. Clone o repo
2. Execute `./setup-mcp.sh`
3. Adicione a chave em `.env.local`
4. Pronto! Funciona em todas as IDEs