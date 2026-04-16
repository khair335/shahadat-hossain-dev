export function renderMarkdown(content: string): string {
  const lines = content.split('\n');
  let html = '';
  let inList = false;
  let listType: 'ul' | 'ol' | null = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    if (!line) {
      if (inList) {
        html += `</${listType}>\n`;
        inList = false;
        listType = null;
      }
      continue;
    }

    // Headers
    if (line.startsWith('### ')) {
      if (inList) {
        html += `</${listType}>\n`;
        inList = false;
        listType = null;
      }
      html += `<h3 class="text-xl font-bold text-gray-900 dark:text-white mt-6 mb-3">${line.substring(4)}</h3>\n`;
      continue;
    }
    if (line.startsWith('## ')) {
      if (inList) {
        html += `</${listType}>\n`;
        inList = false;
        listType = null;
      }
      html += `<h2 class="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">${line.substring(3)}</h2>\n`;
      continue;
    }
    if (line.startsWith('# ')) {
      if (inList) {
        html += `</${listType}>\n`;
        inList = false;
        listType = null;
      }
      html += `<h1 class="text-3xl font-bold text-gray-900 dark:text-white mt-8 mb-4 first:mt-0">${line.substring(2)}</h1>\n`;
      continue;
    }

    // Unordered lists
    if (line.startsWith('- ')) {
      if (!inList || listType !== 'ul') {
        if (inList && listType === 'ol') {
          html += '</ol>\n';
        }
        html += '<ul class="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-2 ml-4">\n';
        inList = true;
        listType = 'ul';
      }
      html += `<li class="text-gray-700 dark:text-gray-300 mb-2">${formatInline(line.substring(2))}</li>\n`;
      continue;
    }

    // Ordered lists
    const orderedMatch = line.match(/^\d+\. (.*)$/);
    if (orderedMatch) {
      if (!inList || listType !== 'ol') {
        if (inList && listType === 'ul') {
          html += '</ul>\n';
        }
        html += '<ol class="list-decimal list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-2 ml-4">\n';
        inList = true;
        listType = 'ol';
      }
      html += `<li class="text-gray-700 dark:text-gray-300 mb-2">${formatInline(orderedMatch[1])}</li>\n`;
      continue;
    }

    // Regular paragraph
    if (inList) {
      html += `</${listType}>\n`;
      inList = false;
      listType = null;
    }
    html += `<p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">${formatInline(line)}</p>\n`;
  }

  if (inList) {
    html += `</${listType}>\n`;
  }

  return html;
}

function formatInline(text: string): string {
  // Bold
  text = text.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-gray-900 dark:text-white">$1</strong>');
  
  // Italic
  text = text.replace(/\*(.*?)\*/g, '<em class="italic">$1</em>');
  
  // Inline code
  text = text.replace(/`([^`]+)`/g, '<code class="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-blue-600 dark:text-blue-400 rounded text-sm font-mono">$1</code>');
  
  return text;
}

