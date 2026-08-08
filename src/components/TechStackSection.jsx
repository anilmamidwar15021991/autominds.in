import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const techTools = [
  // Row 1
  {
    name: 'Python 3.12',
    category: 'Data & Math',
    badgeType: 'svg',
    svg: (
      <svg width="32" height="32" viewBox="0 0 128 128">
        <path fill="#3776AB" d="M62.6 0c-28.5 0-26.8 12.4-26.8 12.4l.1 12.8h27.3v3.8H15.1S0 27.2 0 55.9c0 28.7 13.2 27.6 13.2 27.6h7.9V71.2s-.4-14.7 14.5-14.7h27.1V39.4s1.1-16.7-16.7-16.7H25.8S24.6 6.8 62.6 0z" />
        <path fill="#FFD43B" d="M65.4 128c28.5 0 26.8-12.4 26.8-12.4l-.1-12.8H64.8v-3.8h38.1s15.1 1.8 15.1-26.9c0-28.7-13.2-27.6-13.2-27.6h-7.9v12.3s.4 14.7-14.5 14.7H65.3v17.1s-1.1 16.7 16.7 16.7h12.3s1.2 15.9-36.8 22.7z" />
        <circle cx="43.5" cy="12.5" r="3.5" fill="#fff" />
        <circle cx="84.5" cy="115.5" r="3.5" fill="#fff" />
      </svg>
    )
  },
  {
    name: 'Poetry',
    category: 'DevOps & Cloud',
    badgeType: 'text',
    badgeText: 'PO',
    bgColor: '#E05D44'
  },
  {
    name: 'VS Code',
    category: 'DevOps & Cloud',
    badgeType: 'text',
    badgeText: 'VS',
    bgColor: '#007ACC'
  },
  {
    name: 'Git / GitHub',
    category: 'DevOps & Cloud',
    badgeType: 'svg',
    svg: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="#181717">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    )
  },

  // Row 2
  {
    name: 'NumPy',
    category: 'Data & Math',
    badgeType: 'svg',
    svg: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="#013243">
        <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.236l7.416 3.708L12 11.652 4.584 7.944 12 4.236zM4 9.444l7 3.5v7.612l-7-3.5V9.444zm16 7.612l-7 3.5v-7.612l7-3.5v7.612z" fill="#4DABCF" />
      </svg>
    )
  },
  {
    name: 'Pandas',
    category: 'Data & Math',
    badgeType: 'svg',
    svg: (
      <svg width="32" height="32" viewBox="0 0 24 24">
        <rect x="5" y="2" width="3" height="20" rx="1.5" fill="#150458" />
        <rect x="11" y="6" width="3" height="12" rx="1.5" fill="#E70488" />
        <rect x="17" y="2" width="3" height="20" rx="1.5" fill="#00C0EF" />
      </svg>
    )
  },
  {
    name: 'Matplotlib',
    category: 'Data & Math',
    badgeType: 'text',
    badgeText: 'MPL',
    bgColor: '#11A579'
  },
  {
    name: 'SciPy',
    category: 'Data & Math',
    badgeType: 'svg',
    svg: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#005A9C" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(45 12 12)" />
        <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(-45 12 12)" />
      </svg>
    )
  },

  // Row 3
  {
    name: 'SymPy',
    category: 'Data & Math',
    badgeType: 'svg',
    svg: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="#3B5998">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm0-4h-2V7h2v6zm4 4h-2v-6h2v6zm0-8h-2V7h2v2z" />
      </svg>
    )
  },
  {
    name: 'Scikit-Learn',
    category: 'Data & Math',
    badgeType: 'svg',
    svg: (
      <svg width="32" height="32" viewBox="0 0 24 24">
        <circle cx="9" cy="12" r="6" fill="#F7931E" opacity="0.85" />
        <circle cx="15" cy="12" r="6" fill="#3499CC" opacity="0.85" />
      </svg>
    )
  },
  {
    name: 'NetworkX',
    category: 'Data & Math',
    badgeType: 'text',
    badgeText: 'MPL',
    bgColor: '#11A579'
  },
  {
    name: 'PyTorch',
    category: 'AI & LLMs',
    badgeType: 'svg',
    svg: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="#EE4C2C">
        <path d="M12 1L8.5 4.5l1.4 1.4L12 3.8l2.1 2.1 1.4-1.4L12 1zm0 5a6 6 0 100 12 6 6 0 000-12zm-4.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0z" />
      </svg>
    )
  },

  // Row 4
  {
    name: 'CUDA / NVIDIA',
    category: 'AI & LLMs',
    badgeType: 'svg',
    svg: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="#76B900">
        <path d="M11.9 2C6.4 2 2 6.4 2 11.9c0 5.5 4.4 9.9 9.9 9.9 5.5 0 9.9-4.4 9.9-9.9C21.8 6.4 17.4 2 11.9 2zm4.5 14.3c-2.4 1.8-6.1 1.6-8.2-.6-2.1-2.2-2-5.8.3-8 2.4-2.2 6.2-1.9 8.2.4.3.4.6.8.8 1.3h-2.3c-.2-.4-.4-.7-.7-1-1.3-1.4-3.5-1.5-4.8-.2-1.4 1.3-1.5 3.5-.2 4.9 1.3 1.4 3.5 1.5 4.8.2.6-.6.9-1.3.9-2.1h-3.3v-1.8h5.3v6.9h-1.7v-1.0z" />
      </svg>
    )
  },
  {
    name: 'TensorBoard',
    category: 'AI & LLMs',
    badgeType: 'svg',
    svg: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="#FF6F00">
        <path d="M12 2L2 7l10 5 10-5-10-5zm0 9l-8-4v10l8 4 8-4V7l-8 4z" />
      </svg>
    )
  },
  {
    name: 'Hugging Face',
    category: 'AI & LLMs',
    badgeType: 'svg',
    svg: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="#FFD21E">
        <text x="50%" y="65%" textAnchor="middle" fontSize="22">🤗</text>
      </svg>
    )
  },
  {
    name: 'OpenAI SDK',
    category: 'AI & LLMs',
    badgeType: 'text',
    badgeText: 'AI',
    bgColor: '#9B51E0'
  },

  // Row 5
  {
    name: 'Anthropic API',
    category: 'AI & LLMs',
    badgeType: 'svg',
    svg: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="#000000">
        <path d="M13.8 3H10.2L4 21h3.6l1.3-3.8h6.2l1.3 3.8h3.6L13.8 3zm-3.8 11.4l2-5.9 2 5.9h-4z" />
      </svg>
    )
  },
  {
    name: 'Pydantic',
    category: 'Data & Math',
    badgeType: 'svg',
    svg: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="#E92063">
        <path d="M12 2L2 22h20L12 2zm0 4.5l6.5 13H5.5L12 6.5z" />
      </svg>
    )
  },
  {
    name: 'ChromaDB',
    category: 'Vector DBs',
    badgeType: 'text',
    badgeText: 'CH',
    bgColor: '#F2994A'
  },
  {
    name: 'Pinecone',
    category: 'Vector DBs',
    badgeType: 'text',
    badgeText: 'PN',
    bgColor: '#00A896'
  },

  // Row 6
  {
    name: 'FAISS',
    category: 'Vector DBs',
    badgeType: 'text',
    badgeText: 'FA',
    bgColor: '#2D3748'
  },
  {
    name: 'pgvector',
    category: 'Vector DBs',
    badgeType: 'svg',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="-4 0 264 264" preserveAspectRatio="xMinYMin meet"><path d="M255.008 158.086c-1.535-4.649-5.556-7.887-10.756-8.664-2.452-.366-5.26-.21-8.583.475-5.792 1.195-10.089 1.65-13.225 1.738 11.837-19.985 21.462-42.775 27.003-64.228 8.96-34.689 4.172-50.492-1.423-57.64C233.217 10.847 211.614.683 185.552.372c-13.903-.17-26.108 2.575-32.475 4.549-5.928-1.046-12.302-1.63-18.99-1.738-12.537-.2-23.614 2.533-33.079 8.15-5.24-1.772-13.65-4.27-23.362-5.864-22.842-3.75-41.252-.828-54.718 8.685C6.622 25.672-.937 45.684.461 73.634c.444 8.874 5.408 35.874 13.224 61.48 4.492 14.718 9.282 26.94 14.237 36.33 7.027 13.315 14.546 21.156 22.987 23.972 4.731 1.576 13.327 2.68 22.368-4.85 1.146 1.388 2.675 2.767 4.704 4.048 2.577 1.625 5.728 2.953 8.875 3.74 11.341 2.835 21.964 2.126 31.027-1.848.056 1.612.099 3.152.135 4.482.06 2.157.12 4.272.199 6.25.537 13.374 1.447 23.773 4.143 31.049.148.4.347 1.01.557 1.657 1.345 4.118 3.594 11.012 9.316 16.411 5.925 5.593 13.092 7.308 19.656 7.308 3.292 0 6.433-.432 9.188-1.022 9.82-2.105 20.973-5.311 29.041-16.799 7.628-10.86 11.336-27.217 12.007-52.99.087-.729.167-1.425.244-2.088l.16-1.362 1.797.158.463.031c10.002.456 22.232-1.665 29.743-5.154 5.935-2.754 24.954-12.795 20.476-26.351" /><path d="M237.906 160.722c-29.74 6.135-31.785-3.934-31.785-3.934 31.4-46.593 44.527-105.736 33.2-120.211-30.904-39.485-84.399-20.811-85.292-20.327l-.287.052c-5.876-1.22-12.451-1.946-19.842-2.067-13.456-.22-23.664 3.528-31.41 9.402 0 0-95.43-39.314-90.991 49.444.944 18.882 27.064 142.873 58.218 105.422 11.387-13.695 22.39-25.274 22.39-25.274 5.464 3.63 12.006 5.482 18.864 4.817l.533-.452c-.166 1.7-.09 3.363.213 5.332-8.026 8.967-5.667 10.541-21.711 13.844-16.235 3.346-6.698 9.302-.471 10.86 7.549 1.887 25.013 4.561 36.813-11.958l-.47 1.885c3.144 2.519 5.352 16.383 4.982 28.952-.37 12.568-.617 21.197 1.86 27.937 2.479 6.74 4.948 21.905 26.04 17.386 17.623-3.777 26.756-13.564 28.027-29.89.901-11.606 2.942-9.89 3.07-20.267l1.637-4.912c1.887-15.733.3-20.809 11.157-18.448l2.64.232c7.99.363 18.45-1.286 24.589-4.139 13.218-6.134 21.058-16.377 8.024-13.686h.002" fill="#336791" /><path d="M108.076 81.525c-2.68-.373-5.107-.028-6.335.902-.69.523-.904 1.129-.962 1.546-.154 1.105.62 2.327 1.096 2.957 1.346 1.784 3.312 3.01 5.258 3.28.282.04.563.058.842.058 3.245 0 6.196-2.527 6.456-4.392.325-2.336-3.066-3.893-6.355-4.35M196.86 81.599c-.256-1.831-3.514-2.353-6.606-1.923-3.088.43-6.082 1.824-5.832 3.659.2 1.427 2.777 3.863 5.827 3.863.258 0 .518-.017.78-.054 2.036-.282 3.53-1.575 4.24-2.32 1.08-1.136 1.706-2.402 1.591-3.225" fill="#FFF" /><path d="M247.802 160.025c-1.134-3.429-4.784-4.532-10.848-3.28-18.005 3.716-24.453 1.142-26.57-.417 13.995-21.32 25.508-47.092 31.719-71.137 2.942-11.39 4.567-21.968 4.7-30.59.147-9.463-1.465-16.417-4.789-20.665-13.402-17.125-33.072-26.311-56.882-26.563-16.369-.184-30.199 4.005-32.88 5.183-5.646-1.404-11.801-2.266-18.502-2.376-12.288-.199-22.91 2.743-31.704 8.74-3.82-1.422-13.692-4.811-25.765-6.756-20.872-3.36-37.458-.814-49.294 7.571-14.123 10.006-20.643 27.892-19.38 53.16.425 8.501 5.269 34.653 12.913 59.698 10.062 32.964 21 51.625 32.508 55.464 1.347.449 2.9.763 4.613.763 4.198 0 9.345-1.892 14.7-8.33a529.832 529.832 0 0 1 20.261-22.926c4.524 2.428 9.494 3.784 14.577 3.92.01.133.023.266.035.398a117.66 117.66 0 0 0-2.57 3.175c-3.522 4.471-4.255 5.402-15.592 7.736-3.225.666-11.79 2.431-11.916 8.435-.136 6.56 10.125 9.315 11.294 9.607 4.074 1.02 7.999 1.523 11.742 1.523 9.103 0 17.114-2.992 23.516-8.781-.197 23.386.778 46.43 3.586 53.451 2.3 5.748 7.918 19.795 25.664 19.794 2.604 0 5.47-.303 8.623-.979 18.521-3.97 26.564-12.156 29.675-30.203 1.665-9.645 4.522-32.676 5.866-45.03 2.836.885 6.487 1.29 10.434 1.289 8.232 0 17.731-1.749 23.688-4.514 6.692-3.108 18.768-10.734 16.578-17.36zm-44.106-83.48c-.061 3.647-.563 6.958-1.095 10.414-.573 3.717-1.165 7.56-1.314 12.225-.147 4.54.42 9.26.968 13.825 1.108 9.22 2.245 18.712-2.156 28.078a36.508 36.508 0 0 1-1.95-4.009c-.547-1.326-1.735-3.456-3.38-6.404-6.399-11.476-21.384-38.35-13.713-49.316 2.285-3.264 8.084-6.62 22.64-4.813zm-17.644-61.787c21.334.471 38.21 8.452 50.158 23.72 9.164 11.711-.927 64.998-30.14 110.969a171.33 171.33 0 0 0-.886-1.117l-.37-.462c7.549-12.467 6.073-24.802 4.759-35.738-.54-4.488-1.05-8.727-.92-12.709.134-4.22.692-7.84 1.232-11.34.663-4.313 1.338-8.776 1.152-14.037.139-.552.195-1.204.122-1.978-.475-5.045-6.235-20.144-17.975-33.81-6.422-7.475-15.787-15.84-28.574-21.482 5.5-1.14 13.021-2.203 21.442-2.016zM66.674 175.778c-5.9 7.094-9.974 5.734-11.314 5.288-8.73-2.912-18.86-21.364-27.791-50.624-7.728-25.318-12.244-50.777-12.602-57.916-1.128-22.578 4.345-38.313 16.268-46.769 19.404-13.76 51.306-5.524 64.125-1.347-.184.182-.376.352-.558.537-21.036 21.244-20.537 57.54-20.485 59.759-.002.856.07 2.068.168 3.735.362 6.105 1.036 17.467-.764 30.334-1.672 11.957 2.014 23.66 10.111 32.109a36.275 36.275 0 0 0 2.617 2.468c-3.604 3.86-11.437 12.396-19.775 22.426zm22.479-29.993c-6.526-6.81-9.49-16.282-8.133-25.99 1.9-13.592 1.199-25.43.822-31.79-.053-.89-.1-1.67-.127-2.285 3.073-2.725 17.314-10.355 27.47-8.028 4.634 1.061 7.458 4.217 8.632 9.645 6.076 28.103.804 39.816-3.432 49.229-.873 1.939-1.698 3.772-2.402 5.668l-.546 1.466c-1.382 3.706-2.668 7.152-3.465 10.424-6.938-.02-13.687-2.984-18.819-8.34zm1.065 37.9c-2.026-.506-3.848-1.385-4.917-2.114.893-.42 2.482-.992 5.238-1.56 13.337-2.745 15.397-4.683 19.895-10.394 1.031-1.31 2.2-2.794 3.819-4.602l.002-.002c2.411-2.7 3.514-2.242 5.514-1.412 1.621.67 3.2 2.702 3.84 4.938.303 1.056.643 3.06-.47 4.62-9.396 13.156-23.088 12.987-32.921 10.526zm69.799 64.952c-16.316 3.496-22.093-4.829-25.9-14.346-2.457-6.144-3.665-33.85-2.808-64.447.011-.407-.047-.8-.159-1.17a15.444 15.444 0 0 0-.456-2.162c-1.274-4.452-4.379-8.176-8.104-9.72-1.48-.613-4.196-1.738-7.46-.903.696-2.868 1.903-6.107 3.212-9.614l.549-1.475c.618-1.663 1.394-3.386 2.214-5.21 4.433-9.848 10.504-23.337 3.915-53.81-2.468-11.414-10.71-16.988-23.204-15.693-7.49.775-14.343 3.797-17.761 5.53-.735.372-1.407.732-2.035 1.082.954-11.5 4.558-32.992 18.04-46.59 8.489-8.56 19.794-12.788 33.568-12.56 27.14.444 44.544 14.372 54.366 25.979 8.464 10.001 13.047 20.076 14.876 25.51-13.755-1.399-23.11 1.316-27.852 8.096-10.317 14.748 5.644 43.372 13.315 57.129 1.407 2.521 2.621 4.7 3.003 5.626 2.498 6.054 5.732 10.096 8.093 13.046.724.904 1.426 1.781 1.96 2.547-4.166 1.201-11.649 3.976-10.967 17.847-.55 6.96-4.461 39.546-6.448 51.059-2.623 15.21-8.22 20.875-23.957 24.25zm68.104-77.936c-4.26 1.977-11.389 3.46-18.161 3.779-7.48.35-11.288-.838-12.184-1.569-.42-8.644 2.797-9.547 6.202-10.503.535-.15 1.057-.297 1.561-.473.313.255.656.508 1.032.756 6.012 3.968 16.735 4.396 31.874 1.271l.166-.033c-2.042 1.909-5.536 4.471-10.49 6.772z" fill="#FFF" /></svg>
    )
  },
  {
    name: 'Neo4j',
    category: 'Vector DBs',
    badgeType: 'svg',
    svg: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="#008CC1">
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="6" r="3" />
        <circle cx="18" cy="18" r="3" />
        <path d="M8.5 11L15.5 7.5M8.5 13L15.5 16.5" stroke="#008CC1" strokeWidth="2" />
      </svg>
    )
  },
  {
    name: 'Cohere Rerank',
    category: 'Vector DBs',
    badgeType: 'text',
    badgeText: 'CO',
    bgColor: '#3949AB'
  },

  // Row 7
  {
    name: 'LangChain',
    category: 'AI & LLMs',
    badgeType: 'svg',
    svg: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="#000000">
        <path d="M8 4a4 4 0 100 8 4 4 0 000-8zm0 6a2 2 0 110-4 2 2 0 010 4zm8 2a4 4 0 100 8 4 4 0 000-8zm0 6a2 2 0 110-4 2 2 0 010 4z" />
        <path d="M9.5 10.5l5 3" stroke="#000000" strokeWidth="2" />
      </svg>
    )
  },
  {
    name: 'LangGraph',
    category: 'AI & LLMs',
    badgeType: 'text',
    badgeText: 'LG',
    bgColor: '#EB5757'
  },
  {
    name: 'CrewAI',
    category: 'AI & LLMs',
    badgeType: 'text',
    badgeText: 'CR',
    bgColor: '#27AE60'
  },
  {
    name: 'AutoGen',
    category: 'AI & LLMs',
    badgeType: 'text',
    badgeText: 'AU',
    bgColor: '#8E44AD'
  },

  // Row 8
  {
    name: 'Docker',
    category: 'DevOps & Cloud',
    badgeType: 'svg',
    svg: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="#2496ED">
        <path d="M13.98 11.08h-2.12v-2.1h2.12v2.1zm-2.61 0H9.26v-2.1h2.11v2.1zm-2.61 0H6.64v-2.1h2.12v2.1zm-2.61 0H4.03v-2.1h2.12v2.1zm7.83-2.6h-2.12V6.37h2.12v2.11zm-2.61 0H9.26V6.37h2.11v2.11zm-2.61 0H6.64V6.37h2.12v2.11zm5.22-2.61h-2.12V3.76h2.12v2.11zm4.08 7.02c-.52-.36-1.57-.48-2.33-.27-1.12.31-1.95 1.25-2.28 2.37-.15.52-.16 1.09 0 1.61.34 1.12 1.25 1.95 2.37 2.28.52.15 1.09.16 1.61 0 1.57-.48 2.63-1.94 2.63-3.6 0-.96-.4-1.85-1.02-2.39zM.5 13.5c.3 3.6 3.1 6.5 6.8 6.5 6.1 0 10.9-4.2 12.3-9.9-1.2.6-2.5.9-3.9.8-1.5-.1-2.9-.7-4-1.7-.8.7-1.8 1.2-2.9 1.3-1.3.1-2.6-.3-3.7-1-.9.7-2 1.1-3.2 1.1-.5 0-1-.1-1.4-.1z" />
      </svg>
    )
  },
  {
    name: 'FastAPI',
    category: 'DevOps & Cloud',
    badgeType: 'svg',
    svg: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="#05969E">
        <circle cx="12" cy="12" r="10" />
        <path d="M11 6l-4 7h5l-1 5 4-7h-5l1-5z" fill="#FFFFFF" />
      </svg>
    )
  },
  {
    name: 'Prometheus',
    category: 'DevOps & Cloud',
    badgeType: 'svg',
    svg: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="#E6522C">
        <path d="M12 2C8 6 6 9 6 13c0 3.3 2.7 6 6 6s6-2.7 6-6c0-4-2-7-6-11zm0 15c-1.7 0-3-1.3-3-3 0-1.5 1-3 3-5 2 2 3 3.5 3 5 0 1.7-1.3 3-3 3z" />
      </svg>
    )
  },
  {
    name: 'AWS ECS',
    category: 'DevOps & Cloud',
    badgeType: 'text',
    badgeText: 'AWS',
    bgColor: '#232F3E'
  },

  // Row 9
  {
    name: 'LiteLLM',
    category: 'AI & LLMs',
    badgeType: 'text',
    badgeText: 'LL',
    bgColor: '#00B4D8'
  },
  {
    name: 'Ragas / TruLens',
    category: 'AI & LLMs',
    badgeType: 'text',
    badgeText: 'RG',
    bgColor: '#F39C12'
  }
];

const categories = ['All', 'AI & LLMs', 'Vector DBs', 'Data & Math', 'DevOps & Cloud'];

const TechStackSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredTools = selectedCategory === 'All'
    ? techTools
    : techTools.filter(t => t.category === selectedCategory);

  return (
    <section className="py-5 my-4 position-relative tech-stack-section">
      <div className="container">
        <div className="row align-items-center g-4 g-xl-5">

          {/* Left Column: Heading & Description (Matching Image 2 Layout) */}
          <div className="col-lg-5 text-start">
            <div className="pe-lg-3">
              {/* Badge Pill */}
              <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill bg-lime-subtle border border-lime-subtle mb-3">
                <span className="text-lime fw-bold fs-7">✦ OUR TECH STACK</span>
              </div>

              {/* Main Headline */}
              <h2 className="display-5 fw-extrabold text-white mb-3 font-heading" style={{ lineHeight: 1.15 }}>
                Tools & Technologies <br className="d-none d-sm-inline" />
                <span style={{ color: '#d2fb52' }}>You Will Master</span>
              </h2>

              {/* Subtitle */}
              <p className="fs-6 text-light-muted mb-4" style={{ lineHeight: 1.7, opacity: 0.88 }}>
                Industry-standard tools learned across all 16 modules of the program. Hands-on experience with cutting-edge AI models, LLM frameworks, vector databases, and MLOps tech stack.
              </p>

              {/* Filter Pills */}
              <div className="d-flex flex-wrap gap-2 mb-4">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`btn btn-sm rounded-pill px-3 py-2 fw-semibold transition-all ${selectedCategory === cat
                      ? 'btn-lime text-dark shadow-sm'
                      : 'btn-glass text-white'
                      }`}
                    style={{ fontSize: '0.825rem' }}
                  >
                    {cat} {cat === 'All' ? `(${techTools.length})` : ''}
                  </button>
                ))}
              </div>

              {/* CTA Button */}
              <div className="pt-2">
                <Link to="/courses" className="btn-lime px-4 py-3 text-decoration-none fs-6 d-inline-flex align-items-center gap-2">
                  <span>Explore Tech Stack</span>
                  <i className="bi bi-arrow-right fs-5"></i>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Elevated Soft White Card Grid (Matching Image 2 Design) */}
          <div className="col-lg-7">
            <div className="tech-stack-card p-3 p-sm-4 p-md-4 rounded-5 shadow-2xl position-relative bg-white text-dark">

              {/* Header info bar inside card */}
              <div className="d-flex align-items-center justify-content-between mb-3 px-2 pb-2 border-bottom border-light-subtle">
                <div className="d-flex align-items-center gap-2">
                  <span className="badge rounded-pill bg-dark text-white px-3 py-2 fs-7 fw-bold">
                    {filteredTools.length} Mastered Tools
                  </span>
                </div>
              </div>

              {/* Tools Tile Grid */}
              <div className="tech-tools-grid">
                {filteredTools.map((tool, idx) => (
                  <div
                    key={tool.name + idx}
                    className="tech-tile-item d-flex flex-column align-items-center justify-content-center text-center p-2 rounded-4 bg-white hover-elevate transition-all"
                    title={`${tool.name} - ${tool.category}`}
                  >
                    {/* Icon or Acronym Badge */}
                    <div className="icon-wrapper d-flex align-items-center justify-content-center mb-1">
                      {tool.badgeType === 'svg' ? (
                        tool.svg
                      ) : (
                        <div
                          className="acronym-badge rounded-3 d-flex align-items-center justify-content-center text-white fw-extrabold"
                          style={{
                            backgroundColor: tool.bgColor || '#333',
                            width: '38px',
                            height: '38px',
                            fontSize: '0.85rem',
                            letterSpacing: '0.02em',
                            boxShadow: '0 2px 6px rgba(0,0,0,0.15)'
                          }}
                        >
                          {tool.badgeText}
                        </div>
                      )}
                    </div>

                    {/* Tool Name */}
                    <span className="tool-label text-dark fw-bold" style={{ fontSize: '0.73rem', lineHeight: 1.15 }}>
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
