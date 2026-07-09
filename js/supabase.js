// Configuração do Supabase (preparada para quando criares o projeto)
// 
// Para configurar:
// 1. Cria uma conta em https://supabase.com
// 2. Cria um novo projeto
// 3. Vai em Settings > API
// 4. Copia a URL e a anon key
// 5. Substitui abaixo:

const SUPABASE_URL = 'https://teu-projeto.supabase.co';
const SUPABASE_ANON_KEY = 'tua-anon-key';

// Função para inicializar o Supabase (quando estiveres pronto)
/*
async function initSupabase() {
    const { createClient } = await import('https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm');
    const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    return supabase;
}

// Exemplo: Buscar músicas do Supabase
async function fetchSongsFromSupabase() {
    const supabase = await initSupabase();
    const { data, error } = await supabase
        .from('songs')
        .select('*')
        .order('created_at', { ascending: false });
    
    if (error) {
        console.error('Erro ao buscar músicas:', error);
        return [];
    }
    
    return data;
}
*/
