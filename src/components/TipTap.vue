<template>
  <input ref="fileInput"  type="file" id="formFile" accept="image/*" hidden @change="handleFileChange" >
    <div v-if="editor" class="border rounded border-0">
        <input
      type="color"
      @input="editor.chain().focus().setColor($event.target.value).run()"
      :value="editor.getAttributes('textStyle').color"
    >
    <button @click="editor.chain().focus().setColor('#958DF1').run()" :class="{ 'is-active': editor.isActive('textStyle', { color: '#958DF1' })}">
      purple
    </button>
    <button @click="editor.chain().focus().setColor('#F98181').run()" :class="{ 'is-active': editor.isActive('textStyle', { color: '#F98181' })}">
      red
    </button>
    <button @click="editor.chain().focus().setColor('#FBBC88').run()" :class="{ 'is-active': editor.isActive('textStyle', { color: '#FBBC88' })}">
      orange
    </button>
    <button @click="editor.chain().focus().setColor('#FAF594').run()" :class="{ 'is-active': editor.isActive('textStyle', { color: '#FAF594' })}">
      yellow
    </button>
    <button @click="editor.chain().focus().setColor('#70CFF8').run()" :class="{ 'is-active': editor.isActive('textStyle', { color: '#70CFF8' })}">
      blue
    </button>
    <button @click="editor.chain().focus().setColor('#94FADB').run()" :class="{ 'is-active': editor.isActive('textStyle', { color: '#94FADB' })}">
      teal
    </button>
    <button @click="editor.chain().focus().setColor('#B9F18D').run()" :class="{ 'is-active': editor.isActive('textStyle', { color: '#B9F18D' })}">
      green
    </button>
    <button @click="editor.chain().focus().unsetColor().run()">
      unsetColor
    </button>
    
   
      
    <button @click="editor.chain().focus().undo().run()" :disabled="!editor.can().chain().focus().undo().run()" class="border-0 rounded bg-transparent me-1">
        <i class="fa-solid fa-rotate-left fa-lg"></i>
      </button>
      <button @click="editor.chain().focus().redo().run()" :disabled="!editor.can().chain().focus().redo().run()" class="border-0 rounded bg-transparent me-1">
        <i class="fa-solid fa-rotate-right fa-lg"></i>
      </button>
      
    </div>
    <bubble-menu
      :editor="editor"
      :tippy-options="{ duration: 100 }"
      v-if="editor"
      class="bubble-menu bg-secondary-subtle rounded p-1"
    >
    <button @click="editor.chain().focus().toggleHeading({ level: 3 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }" class="border-0 rounded bg-transparent ">
        Heading
      </button>
    <button @click="editor.chain().focus().toggleBold().run()" :disabled="!editor.can().chain().focus().toggleBold().run()" :class="{ 'is-active': editor.isActive('bold') }" class="border-0 bg-transparent">
        <i class="fa-solid fa-bold fa-lg" style="color: rgb(10, 10, 10);"></i>
      </button>
      <button @click="editor.chain().focus().toggleItalic().run()" :disabled="!editor.can().chain().focus().toggleItalic().run()" :class="{ 'is-active': editor.isActive('italic') }" class="border-0  bg-transparent">
        <i class="fa-solid fa-italic fa-lg" style="color: rgb(31, 25, 26);"></i>
      </button>
      <button @click="editor.chain().focus().setTextAlign('left').run()" :class="{ 'is-active': editor.isActive({ textAlign: 'left' }) }" class="border-0  bg-transparent">
        <i class="fa-solid fa-align-left fa-lg" style="color: rgb(155, 51, 216);"></i>
    </button>
    <button @click="editor.chain().focus().setTextAlign('center').run()" :class="{ 'is-active': editor.isActive({ textAlign: 'center' }) }" class="border-0 bg-transparent ">
        <i class="fa-solid fa-align-center fa-lg" style="color: rgb(216, 51, 183);"></i>
    </button>
    <button @click="editor.chain().focus().setTextAlign('right').run()" :class="{ 'is-active': editor.isActive({ textAlign: 'right' }) }" class="border-0  bg-transparent">
        <i class="fa-solid fa-align-right fa-lg" style="color: rgb(216, 51, 87);"></i>
    </button>
     
      <button @click="editor.chain().focus().toggleHighlight().run()" :class="{ 'is-active': editor.isActive('highlight') }" class="border-0  bg-transparent ">
        <i class="fa-solid fa-highlighter fa-lg" style="color: #FF9900;"></i>
    </button>
      <button @click="setLink" :class="{ 'is-active': editor.isActive('link') }" class="border-0 bg-transparent ">
        <i class="fa-solid fa-link fa-lg" style="color: rgb(51, 166, 216);"></i>
    </button>
    </bubble-menu>
    <floating-menu :editor="editor" :tippy-options="{ duration: 100 }" v-if="editor" class="m-1">
        <button @click="editor.chain().focus().toggleHeading({ level: 3 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }" class="border-0 rounded bg-transparent ">
        Heading
      </button>
      
        <button @click="editor.chain().focus().toggleBulletList().run()" :class="{ 'is-active': editor.isActive('bulletList') }" class="border-0 rounded bg-transparent ">
        <i class="fa-solid fa-list-ul fa-lg" style="color: rgb(53, 144, 25);"></i>
      </button>
        <button @click="editor.chain().focus().toggleOrderedList().run()" :class="{ 'is-active': editor.isActive('orderedList') }" class="border-0 rounded bg-transparent ">
        <i class="fa-solid fa-list-ol fa-lg" style="color: rgb(216, 192, 51);"></i>
      </button>
      
    <button @click="editor.chain().focus().setTextAlign('left').run()" :class="{ 'is-active': editor.isActive({ textAlign: 'left' }) }" class="border-0  bg-transparent">
        <i class="fa-solid fa-align-left fa-lg" style="color: rgb(155, 51, 216);"></i>
    </button>
    <button @click="editor.chain().focus().setTextAlign('center').run()" :class="{ 'is-active': editor.isActive({ textAlign: 'center' }) }" class="border-0 bg-transparent ">
        <i class="fa-solid fa-align-center fa-lg" style="color: rgb(216, 51, 183);"></i>
    </button>
    <button @click="editor.chain().focus().setTextAlign('right').run()" :class="{ 'is-active': editor.isActive({ textAlign: 'right' }) }" class="border-0  bg-transparent">
        <i class="fa-solid fa-align-right fa-lg" style="color: rgb(216, 51, 87);"></i>
    </button>
    <button id="add" @click="addVideo" class="border-0 rounded bg-transparent ">
        <i class="fa-brands fa-youtube fa-lg" style="color: rgb(181, 54, 54);"></i>
      </button>
      <button @click="clicked" class="border-0 rounded bg-transparent ">
        <i class="fa-solid fa-image fa-lg" style="color: rgb(36, 83, 163);"></i>
    </button>
      </floating-menu>
    <editor-content :editor="editor" class="p-2 border" />
    
  </template>
  
<script>
  import StarterKit from '@tiptap/starter-kit'
  import { Editor, EditorContent, FloatingMenu, BubbleMenu} from '@tiptap/vue-3'
  import Image from '@tiptap/extension-image'
  import Highlight from '@tiptap/extension-highlight'
  import TextAlign from '@tiptap/extension-text-align'
  import Link from '@tiptap/extension-link'
  import TextStyle from '@tiptap/extension-text-style'
  import Text from '@tiptap/extension-text'
  import Youtube from '@tiptap/extension-youtube'
  import { Color } from '@tiptap/extension-color'

  
  export default {
    components: {
      EditorContent,
      FloatingMenu,
      BubbleMenu,
    },
    props: {
    modelValue: {
      type: String,
      default: '',
    },
  },
  emits: ['update:modelValue'],
  
    data() {
      return {
        editor: null,
        value:''
      }
    },
    watch: {
    modelValue(value) {
      // HTML
      const isSame = this.editor.getHTML() === value

      // JSON
      // const isSame = JSON.stringify(this.editor.getJSON()) === JSON.stringify(value)

      if (isSame) {
        return
      }

      this.editor.commands.setContent(value, false)
    },
  },
    
  
    mounted() {
      this.editor = new Editor({
        extensions: [
          StarterKit,
          Image,
          Highlight.configure({ multicolor: true }),
          TextAlign.configure({
          types: ['heading', 'paragraph'],
            }),
         Link.configure({
          openOnClick: false,
        }),
        
        TextStyle,
        Youtube.configure({
          controls: false,
        }),
        Color
       
        ],
        content: this.modelValue,
      onUpdate: () => {
        // HTML
        this.$emit('update:modelValue', this.editor.getHTML())

        // JSON
        // this.$emit('update:modelValue', this.editor.getJSON())
      },
      })
    },
    methods: {
       
        clicked() {
            document.getElementById("formFile").click()
            //value.value += `<img src="https://cdn.statcdn.com/Infographic/images/normal/30803.jpeg" >`
        },
        async  handleFileChange() {
           
  let formData = new FormData();
  formData.append('image',this.$refs.fileInput.files[0]);
  const file = this.$refs.fileInput.files[0]
  
  if (file) {
    const res = await fetch(`https://test-am3oxfhvvq-em.a.run.app/upload/image`, {
                    method: "POST",
                    Allow: ['GET', 'POST'],
                    headers : {
                        "Authentication-Token" : localStorage.getItem('auth-token'),
                        //'Content-Type': 'application/json'
                    },
                    body : formData
                })
    const data = await res.json()
    if ( res.ok){
        this.addImage(data.url)
       
    }
      }
},
        addVideo() {
      const url = prompt('Enter YouTube URL')

      this.editor.commands.setYoutubeVideo({
        src: url,
      })
    },
  
    addImage(url) {
      
       
      if (url) {
        
        this.editor.chain().focus().setImage({ src: url,alt:'dfg' }).run()
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
  
  <style lang="scss" >

  .bubble-menu {
    position: relative;

    
    padding: .5rem;
    margin-bottom: 2.3rem;
   
 
   
    
  }
  /* Basic editor styles */
  .tiptap {
    min-height: 100px;
    > * + * {
      margin-top: 0.75em;
      
    }
  
    ul,
    ol {
      padding: 0 1rem;
      margin: 1rem;
    }
    ul,
    ol  {
     p{
        margin: 0px;
     }
      
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
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
  
  
    hr {
      border: none;
      border-top: 2px solid ;
      margin: 2rem 0;
    }
    iframe {
    border: 4px solid #000;
    border-radius: 2px;
    width: auto;
    height: auto;
    display: block;
    outline: 0px solid transparent;
    margin:auto;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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