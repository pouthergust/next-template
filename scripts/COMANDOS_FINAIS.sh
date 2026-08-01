#!/bin/bash

# Script de finalização do setup da Arquitetura de QA
# Execute este script para finalizar a configuração

set -e

echo "🚀 Finalizando setup da Arquitetura de QA..."
echo ""

# Cores
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m'

# 1. Dar permissões aos hooks
echo -e "${BLUE}1/4${NC} Dando permissões aos hooks do Husky..."
chmod +x .husky/pre-commit .husky/pre-push 2>/dev/null || true
echo -e "${GREEN}✓${NC} Permissões configuradas"
echo ""

# 2. Dar permissão ao script de verificação
echo -e "${BLUE}2/4${NC} Dando permissão ao script de verificação..."
chmod +x scripts/verify-qa-setup.sh 2>/dev/null || true
chmod +x COMANDOS_FINAIS.sh 2>/dev/null || true
echo -e "${GREEN}✓${NC} Permissões configuradas"
echo ""

# 3. Inicializar Husky
echo -e "${BLUE}3/4${NC} Inicializando Husky..."
npx --no-install husky
echo -e "${GREEN}✓${NC} Husky inicializado"
echo ""

# 4. Verificar instalação
echo -e "${BLUE}4/4${NC} Verificando instalação completa..."
echo ""

if [ -f "scripts/verify-qa-setup.sh" ]; then
    bash scripts/verify-qa-setup.sh
else
    echo -e "${YELLOW}⚠${NC} Script de verificação não encontrado"
    echo "Executando validações básicas..."
    echo ""
    
    echo "Type-check..."
    npx --no-install tsc --noEmit
    echo ""
    
    echo "Linting..."
    npx --no-install eslint .
    echo ""
    
    echo "Testes..."
    npx --no-install vitest run
    echo ""
fi

echo ""
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GREEN}✅ Setup finalizado com sucesso!${NC}"
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""
echo "📚 Próximos passos:"
echo "  1. Leia README.md para visão geral"
echo "  2. Execute o script 'dev' com o gerenciador de pacotes de sua preferência"
echo "  3. Faça commits normalmente - os hooks cuidarão da qualidade"
echo ""
echo "🎉 Você está pronto para desenvolver com qualidade garantida!"
echo ""
