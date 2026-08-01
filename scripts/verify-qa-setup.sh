#!/bin/bash

# Script de verificação da arquitetura de QA
# Executa todas as validações necessárias

set -e

echo "🔍 Verificando Arquitetura de QA..."
echo ""

# Cores para output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Função para verificar arquivo
check_file() {
    if [ -f "$1" ]; then
        echo -e "${GREEN}✓${NC} $1 existe"
        return 0
    else
        echo -e "${RED}✗${NC} $1 não encontrado"
        return 1
    fi
}

# Função para verificar comando
check_command() {
    if command -v "$1" &> /dev/null; then
        echo -e "${GREEN}✓${NC} $1 está instalado"
        return 0
    else
        echo -e "${RED}✗${NC} $1 não está instalado"
        return 1
    fi
}

echo "📁 Verificando arquivos de configuração..."
check_file ".prettierrc"
check_file ".prettierignore"
check_file ".lintstagedrc.json"
check_file "eslint.config.mjs"
check_file "vitest.config.ts"
check_file "vitest.setup.ts"
check_file "tsconfig.json"
check_file ".husky/pre-commit"
check_file ".husky/pre-push"
echo ""

echo "📦 Verificando dependências..."
check_command "node"
echo ""

echo "🔧 Verificando scripts no package.json..."
if grep -q '"lint":' package.json; then
    echo -e "${GREEN}✓${NC} Script 'lint' configurado"
else
    echo -e "${RED}✗${NC} Script 'lint' não encontrado"
fi

if grep -q '"test":' package.json; then
    echo -e "${GREEN}✓${NC} Script 'test' configurado"
else
    echo -e "${RED}✗${NC} Script 'test' não encontrado"
fi

if grep -q '"type-check":' package.json; then
    echo -e "${GREEN}✓${NC} Script 'type-check' configurado"
else
    echo -e "${RED}✗${NC} Script 'type-check' não encontrado"
fi

if grep -q '"format":' package.json; then
    echo -e "${GREEN}✓${NC} Script 'format' configurado"
else
    echo -e "${RED}✗${NC} Script 'format' não encontrado"
fi
echo ""

echo "🧪 Verificando arquivos de teste..."
if [ -f "src/lib/utils.test.ts" ]; then
    echo -e "${GREEN}✓${NC} Testes de exemplo encontrados"
else
    echo -e "${YELLOW}⚠${NC} Nenhum teste encontrado"
fi
echo ""

echo "🔒 Verificando permissões dos hooks..."
if [ -x ".husky/pre-commit" ]; then
    echo -e "${GREEN}✓${NC} pre-commit é executável"
else
    echo -e "${YELLOW}⚠${NC} pre-commit não é executável (execute: chmod +x .husky/pre-commit)"
fi

if [ -x ".husky/pre-push" ]; then
    echo -e "${GREEN}✓${NC} pre-push é executável"
else
    echo -e "${YELLOW}⚠${NC} pre-push não é executável (execute: chmod +x .husky/pre-push)"
fi
echo ""

echo "🚀 Executando validações..."
echo ""

echo "1️⃣ Type-check..."
if npx --no-install tsc --noEmit; then
    echo -e "${GREEN}✓${NC} Type-check passou"
else
    echo -e "${RED}✗${NC} Type-check falhou"
    exit 1
fi
echo ""

echo "2️⃣ Linting..."
if npx --no-install eslint .; then
    echo -e "${GREEN}✓${NC} Linting passou"
else
    echo -e "${RED}✗${NC} Linting falhou"
    exit 1
fi
echo ""

echo "3️⃣ Formatação..."
if npx --no-install prettier --check .; then
    echo -e "${GREEN}✓${NC} Formatação está correta"
else
    echo -e "${YELLOW}⚠${NC} Arquivos precisam ser formatados (execute o script 'format' com o gerenciador de sua preferência)"
fi
echo ""

echo "4️⃣ Testes..."
if npx --no-install vitest run; then
    echo -e "${GREEN}✓${NC} Todos os testes passaram"
else
    echo -e "${RED}✗${NC} Alguns testes falharam"
    exit 1
fi
echo ""

echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GREEN}✅ Arquitetura de QA configurada com sucesso!${NC}"
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""
echo "📚 Próximos passos:"
echo "  • Execute o script 'dev' com o gerenciador de pacotes de sua preferência"
echo "  • Os hooks serão executados automaticamente nos commits/pushes"
echo "  • Consulte README.md e package.json para mais detalhes"
echo ""
