<template>
    <div v-if="editor" class="border rounded border-2">
        <button class="border-0 bg-transparent dropdown-toggle p-2" data-bs-toggle="dropdown" aria-expanded="false">
            size
        </button>
  <ul class="dropdown-menu">
    
      <button @click="editor.chain().focus().toggleHeading({ level: 3 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }" class="border-0 bg-transparent">
        Large
      </button>
      <button @click="editor.chain().focus().toggleHeading({ level: 4 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 4 }) }" class="border-0 bg-transparent">
        Medium
      </button>
      <button @click="editor.chain().focus().toggleHeading({ level: 5 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 5 }) }" class="border-0 bg-transparent">
        Normal
      </button>
      <button @click="editor.chain().focus().toggleHeading({ level: 6 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 6 }) }" class="border-0 bg-transparent">
        Small
      </button>
  </ul>
        <button class="border-0 bg-transparent dropdown-toggle p-2" data-bs-toggle="dropdown" aria-expanded="false">
            font
        </button>
  <ul class="dropdown-menu">
    
    <button @click="editor.chain().focus().setFontFamily('Inter').run()" :class="{ 'is-active': editor.isActive('textStyle', { fontFamily: 'Inter' }) }" class="border-0 bg-transparent p-2">
      Inter
    </button>
    <button @click="editor.chain().focus().setFontFamily('Comic Sans MS, Comic Sans').run()" :class="{ 'is-active': editor.isActive('textStyle', { fontFamily: 'Comic Sans MS, Comic Sans' }) }" class="border-0 bg-transparent p-2">
      Comic Sans
    </button>
    <button @click="editor.chain().focus().setFontFamily('serif').run()" :class="{ 'is-active': editor.isActive('textStyle', { fontFamily: 'serif' }) }" class="border-0 bg-transparent p-2">
      serif
    </button>
    <button @click="editor.chain().focus().setFontFamily('monospace').run()" :class="{ 'is-active': editor.isActive('textStyle', { fontFamily: 'monospace' }) }" class="border-0 bg-transparent p-2">
      monospace
    </button>
    <button @click="editor.chain().focus().setFontFamily('cursive').run()" :class="{ 'is-active': editor.isActive('textStyle', { fontFamily: 'cursive' }) }" class="border-0 bg-transparent p-2">
      cursive
    </button>
    <button @click="editor.chain().focus().unsetFontFamily().run()" class="border-0 bg-transparent p-2">
      unsetFontFamily
    </button>
  </ul>
        
      <button @click="editor.chain().focus().toggleBold().run()" :disabled="!editor.can().chain().focus().toggleBold().run()" :class="{ 'is-active': editor.isActive('bold') }" class="border-0 bg-transparent p-2">
        <i class="fa-solid fa-bold"></i>
      </button>
      <button @click="editor.chain().focus().toggleItalic().run()" :disabled="!editor.can().chain().focus().toggleItalic().run()" :class="{ 'is-active': editor.isActive('italic') }" class="border-0 bg-transparent p-2">
        <i class="fa-solid fa-italic"></i>
      </button>
      
      <button @click="editor.chain().focus().toggleCode().run()" :disabled="!editor.can().chain().focus().toggleCode().run()" :class="{ 'is-active': editor.isActive('code') }" class="border-0 bg-transparent p-2">
        <i class="fa-regular fa-square"></i>
      </button>
      <button @click="editor.chain().focus().setParagraph().run()" :class="{ 'is-active': editor.isActive('paragraph') }" class="border-0 bg-transparent p-2">
        <i class="fa-solid fa-paragraph"></i>
      </button>
      
        

     
      <button @click="editor.chain().focus().toggleBulletList().run()" :class="{ 'is-active': editor.isActive('bulletList') }" class="border-0 bg-transparent p-2">
        <i class="fa-solid fa-list-ul"></i>
      </button>
      <button @click="editor.chain().focus().toggleOrderedList().run()" :class="{ 'is-active': editor.isActive('orderedList') }" class="border-0 bg-transparent p-2">
        <i class="fa-solid fa-list-ol"></i>
      </button>
      <button @click="editor.chain().focus().toggleCodeBlock().run()" :class="{ 'is-active': editor.isActive('codeBlock') }" class="border-0 bg-transparent p-2">
        <i class="fa-solid fa-code"></i>
      </button>
      <button @click="editor.chain().focus().setTextAlign('left').run()" :class="{ 'is-active': editor.isActive({ textAlign: 'left' }) }" class="border-0 bg-transparent">
        <i class="fa-solid fa-align-left"></i>
    </button>
    <button @click="editor.chain().focus().setTextAlign('center').run()" :class="{ 'is-active': editor.isActive({ textAlign: 'center' }) }" class="border-0 bg-transparent">
        <i class="fa-solid fa-align-center"></i>
    </button>
    <button @click="editor.chain().focus().setTextAlign('right').run()" :class="{ 'is-active': editor.isActive({ textAlign: 'right' }) }" class="border-0 bg-transparent">
        <i class="fa-solid fa-align-right"></i>
    </button>
      
      <button @click="editor.chain().focus().setHardBreak().run()" class="border-0 bg-transparent p-2">
        hard break
      </button>
      <button id="add" @click="addVideo" class="border-0 bg-transparent p-2">
        <i class="fa-brands fa-youtube"></i>
      </button>
      <button @click="addImage" class="border-0 bg-transparent p-2">
        <i class="fa-solid fa-image"></i>
    </button>
      <button @click="setLink" :class="{ 'is-active': editor.isActive('link') }" class="border-0 bg-transparent p-2">
        <i class="fa-solid fa-link"></i>
    </button>
      <button @click="editor.chain().focus().toggleHighlight().run()" :class="{ 'is-active': editor.isActive('highlight') }" class="border-0 bg-transparent p-2">
        <i class="fa-solid fa-highlighter"></i>
    </button>
    <button @click="editor.chain().focus().undo().run()" :disabled="!editor.can().chain().focus().undo().run()" class="border-0 bg-transparent p-2">
        <i class="fa-solid fa-rotate-left"></i>
      </button>
      <button @click="editor.chain().focus().redo().run()" :disabled="!editor.can().chain().focus().redo().run()" class="border-0 bg-transparent p-2">
        <i class="fa-solid fa-rotate-right"></i>
      </button>
    </div>
    <editor-content :editor="editor" class="p-2"/>
  </template>
  
<script>
  import StarterKit from '@tiptap/starter-kit'
  import { Editor, EditorContent } from '@tiptap/vue-3'
  import Image from '@tiptap/extension-image'
  import Highlight from '@tiptap/extension-highlight'
  import TextAlign from '@tiptap/extension-text-align'
  import Link from '@tiptap/extension-link'
  import FontFamily from '@tiptap/extension-font-family'
  import TextStyle from '@tiptap/extension-text-style'
  import Text from '@tiptap/extension-text'
  import Youtube from '@tiptap/extension-youtube'
  
  export default {
    components: {
      EditorContent,
    },
  
    data() {
      return {
        editor: null,
      }
    },
  
    mounted() {
      this.editor = new Editor({
        extensions: [
          StarterKit,
          Image,
          Highlight,
          TextAlign.configure({
          types: ['heading', 'paragraph'],
            }),
         Link.configure({
          openOnClick: false,
        }),
        Text,
        TextStyle,
        FontFamily,
        Youtube.configure({
          controls: false,
        }),
        ],
        content: `
          <h2>
            Hi there,
          </h2>
          <p>
            this is a <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
          </p>
          <ul>
            <li>
              That’s a bullet list with one …
            </li>
            <li>
              … or two list items.
            </li>
          </ul>
          <p>
            Isn’t that great? And all of that is editable. But wait, there’s more. Let’s try a code block:
          </p>
          <pre><code class="language-css">body {
    display: none;
  }</code></pre>
          <p>
            I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too.
          </p>
          <blockquote>
            Wow, that’s amazing. Good work, boy! 👏
            <br />
            — Mom
          </blockquote>
        `,
      })
    },
    methods: {
        addVideo() {
      const url = prompt('Enter YouTube URL')

      this.editor.commands.setYoutubeVideo({
        src: url,
      })
    },
  
    addImage() {
      const url = window.prompt('URL')

      if (url) {
        this.editor.chain().focus().setImage({ src: url }).run()
      }
    },
    setLink() {
      const previousUrl = this.editor.getAttributes('link').href
      const url = window.prompt('URL', previousUrl)

      // cancelled
      if (url === null) {
        return
      }

      // empty
      if (url === '') {
        this.editor
          .chain()
          .focus()
          .extendMarkRange('link')
          .unsetLink()
          .run()

        return
      }

      // update link
      this.editor
        .chain()
        .focus()
        .extendMarkRange('link')
        .setLink({ href: url })
        .run()
    },
  },
    beforeUnmount() {
      this.editor.destroy()
    },
  }
  </script>
  
  <style lang="scss">
  /* Basic editor styles */
  .tiptap {
    > * + * {
      margin-top: 0.75em;
    }
  
    ul,
    ol {
      padding: 0 1rem;
    }
  
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      line-height: 1.1;
    }
  
    code {
      background-color: rgba(#616161, 0.1);
      color: #616161;
    }
  
    pre {
      background: #0D0D0D;
      color: #FFF;
      font-family: 'JetBrainsMono', monospace;
      padding: 0.75rem 1rem;
      border-radius: 0.5rem;
  
      code {
        color: inherit;
        padding: 0;
        background: none;
        font-size: 0.8rem;
      }
    }
  
    img {
      max-width: 80%;
      height: auto;
      margin:auto;
      display: block;
    }
  
  
    hr {
      border: none;
      border-top: 2px solid ;
      margin: 2rem 0;
    }
    iframe {
    border: 4px solid #000;
    border-radius: 2px;
    width: 80%;
    height: 300px;
    display: block;
    outline: 0px solid transparent;
    margin:auto
  }

  div[data-youtube-video] {
    cursor: move;
    padding-right: 24px;
  }

  .ProseMirror-selectednode iframe {
    transition: outline 0.15s;
    outline: 6px solid #ece111;
  }
  }
  </style>