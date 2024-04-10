<template>
    <div>
      <div>
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
      <floating-menu :editor="editor" :tippy-options="{ duration: 100 }" v-if="editor">
        <button @click="editor.chain().focus().toggleHeading({ level: 1 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }">
          H1
        </button>
        <button @click="editor.chain().focus().toggleHeading({ level: 2 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }">
          H2
        </button>
        <button @click="editor.chain().focus().toggleBulletList().run()" :class="{ 'is-active': editor.isActive('bulletList') }">
          Bullet List
        </button>
        <button @click="editor.chain().focus().toggleBlockquote().run()" :class="{ 'is-active': editor.isActive('blockquote') }">
      blockquote
    </button>
      </floating-menu>
      <editor-content :editor="editor" />
    </div>
  </template>
  
  <script>
  import StarterKit from '@tiptap/starter-kit'
  import { Editor, EditorContent, FloatingMenu } from '@tiptap/vue-3'
  import Youtube from '@tiptap/extension-youtube'
  import Image from '@tiptap/extension-image'
  import Highlight from '@tiptap/extension-highlight'
  import Link from '@tiptap/extension-link'
  
  
  export default {
    components: {
      EditorContent,
      FloatingMenu,
    },
  
    data() {
      return {
        editor: null,
        isEditable: true,
      }
    },
  
    watch: {
      isEditable(value) {
        this.editor.setEditable(value)
      },
    },
  
    mounted() {
      this.editor = new Editor({
        extensions: [
          StarterKit,
          Image,
          Highlight,
          Youtube.configure({
          controls: false,
          
        }),
        Link.configure({
          openOnClick: false,
        }),
        ],
        content: `
          <p>
            This is an example of a Medium-like editor. Enter a new line and some buttons will appear.
          </p>
          <p></p>
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
  }
  </style>