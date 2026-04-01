# Mario Henrique — Portfolio

Portfólio pessoal construído com **Next.js 14** (App Router) e hospedado na **Vercel**.

---

## 🚀 Deploy na Vercel

### Opção 1 — Via GitHub (recomendado)

1. Faça push deste projeto para um repositório no GitHub
2. Acesse [vercel.com](https://vercel.com) e clique em **"Add New → Project"**
3. Importe o repositório
4. Clique em **Deploy** — a Vercel detecta Next.js automaticamente

### Opção 2 — Via CLI

```bash
npm install -g vercel
vercel
```

---

## 🖼️ Adicionando sua foto

Coloque sua foto em:

```
public/photo.jpg
```

A imagem é exibida na seção Hero. Recomendado: proporção **4:5**, mínimo **600×750px**.

---

## 📄 Adicionando seu Currículo para download

Coloque o PDF em:

```
public/mario-henrique-cv.pdf
```

O botão "Baixar Currículo" no rodapé apontará para esse arquivo.

---

## ✏️ Como adicionar um novo projeto

Edite o arquivo `data/portfolio.ts` e adicione um objeto ao array `projects`:

```ts
{
  title: "Nome do Projeto",
  subtitle: "Subtítulo / contexto",
  description: "Descrição em 2-3 frases do que é e o que resolve.",
  stack: ["Tech1", "Tech2", "Tech3"],
  highlights: [
    "Resultado ou feature principal",
    "Outro impacto mensurável",
  ],
  status: "production", // "production" | "r&d" | "open-source"
},
```

---

## 🛠️ Rodando localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`

---

## 🎨 Paleta de cores

| Token      | Hex       |
|------------|-----------|
| `--deep`   | `#061E29` |
| `--ocean`  | `#1D546D` |
| `--teal`   | `#5F9598` |
| `--light`  | `#F3F4F4` |

Ajuste as variáveis em `app/globals.css`.
