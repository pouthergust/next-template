#!/bin/bash

echo "🚀 Configurando MCP para todas as ferramentas..."

# Cores para output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Verificar se .env.local existe
if [ ! -f ".env.local" ]; then
    echo -e "${YELLOW}⚠️  Arquivo .env.local não encontrado${NC}"
    echo "Copiando .env.example para .env.local..."
    cp .env.example .env.local
    echo -e "${YELLOW}⚠️  IMPORTANTE: Edite .env.local e adicione sua CONTEXT7_API_KEY${NC}"
    exit 1
fi

# Carregar variável
source .env.local

if [ -z "$CONTEXT7_API_KEY" ]; then
    echo -e "${YELLOW}⚠️  CONTEXT7_API_KEY não está definida em .env.local${NC}"
    exit 1
fi

echo -e "${GREEN}✓ Variável carregada: CONTEXT7_API_KEY${NC}"

# Função para criar config
create_config() {
    local config_file=$1
    local config_dir=$(dirname "$config_file")
    
    mkdir -p "$config_dir"
    
    cat > "$config_file" << EOF
{
  "mcpServers": {
    "context7": {
      "command": "npx",
      "args": ["-y", "@upstash/context7-mcp"],
      "env": {
        "CONTEXT7_API_KEY": "$CONTEXT7_API_KEY"
      }
    }
  }
}
EOF
}

# Configurar para VSCode/Cursor (no projeto)
echo "Configurando VSCode/Cursor..."
create_config ".vscode/mcp.json"
echo -e "${GREEN}✓ VSCode/Cursor configurado${NC}"

# Configurar para Claude Desktop (macOS)
if [[ "$OSTYPE" == "darwin"* ]]; then
    echo "Configurando Claude Desktop..."
    CLAUDE_CONFIG="$HOME/Library/Application Support/Claude/claude_desktop_config.json"
    create_config "$CLAUDE_CONFIG"
    echo -e "${GREEN}✓ Claude Desktop configurado${NC}"
fi

# Configurar para Claude Code
echo "Configurando Claude Code..."
CLAUDE_CODE_CONFIG="$HOME/.config/claude-code/mcp_settings.json"
create_config "$CLAUDE_CODE_CONFIG"
echo -e "${GREEN}✓ Claude Code configurado${NC}"

echo ""
echo -e "${GREEN}🎉 Configuração concluída!${NC}"
echo ""
echo "Próximos passos:"
echo "1. Reinicie suas IDEs"
echo "2. Para Claude Desktop: Reinicie o aplicativo"
echo "3. Para Claude Code: Execute 'claude-code --reload-mcp'"