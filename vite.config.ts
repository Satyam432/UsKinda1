import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig(({ mode }) => {
  const repository = loadEnv(mode, '.', '').GITHUB_REPOSITORY;
  return {plugins:[react()],base:mode==='production'&&repository?`/${repository.split('/')[1]}/`:'/',test:{environment:'jsdom',setupFiles:'./src/test/setup.ts',css:true,exclude:['pro1/**','node_modules/**','dist/**']}};
});
