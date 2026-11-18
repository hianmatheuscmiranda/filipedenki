// Gera dist/sitemap.xml e dist/robots.txt a partir de VITE_SITE_URL (arquivo .env).
import { writeFileSync, readFileSync, existsSync } from 'node:fs'

let site = process.env.VITE_SITE_URL || ''
if (!site && existsSync('.env')) {
  const m = readFileSync('.env', 'utf8').match(/^VITE_SITE_URL=(.*)$/m)
  if (m) site = m[1].trim()
}
site = (site || 'https://www.filipedenki.com.br').replace(/\/$/, '')
const paths = ['/', '/sobre', '/publicacoes', '/artigo', '/livros', '/cursos', '/videos', '/imprensa', '/eventos', '/contato']
const today = new Date().toISOString().slice(0, 10)
const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${paths.map(p => `  <url><loc>${site}${p}</loc><lastmod>${today}</lastmod></url>`).join('\n')}\n</urlset>\n`
writeFileSync('dist/sitemap.xml', xml)
writeFileSync('dist/robots.txt', `User-agent: *\nAllow: /\nDisallow: /admin\nDisallow: /sistema\nSitemap: ${site}/sitemap.xml\n`)
console.log('sitemap.xml e robots.txt gerados para', site)
