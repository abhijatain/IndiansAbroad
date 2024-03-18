<template>
  <div v-if="editor" class="bg-secondary-subtle">
    
      <i class="fa-solid fa-bold p-2" @click="editor.chain().focus().toggleBold().run()" :disabled="!editor.can().chain().focus().toggleBold().run()" :class="{ 'is-active': editor.isActive('bold') }"></i>
      <i class="fa-solid fa-italic p-2" @click="editor.chain().focus().toggleItalic().run()" :disabled="!editor.can().chain().focus().toggleItalic().run()" :class="{ 'is-active': editor.isActive('italic') }"></i>
      <i class="fa-solid fa-strikethrough p-2" @click="editor.chain().focus().toggleStrike().run()" :disabled="!editor.can().chain().focus().toggleStrike().run()" :class="{ 'is-active': editor.isActive('strike') }"></i>
      <i class="fa-solid fa-list-ul p-2" @click="editor.chain().focus().toggleBulletList().run()" :class="{ 'is-active': editor.isActive('bulletList') }"></i>
    <i class="fa-brands fa-line p-2" @click="editor.chain().focus().setHorizontalRule().run()"></i>
    <i class="fa-solid fa-rotate-left p-2" @click="editor.chain().focus().undo().run()" :disabled="!editor.can().chain().focus().undo().run()"></i>
    <i class="fa-solid fa-rotate-right p-2" @click="editor.chain().focus().redo().run()" :disabled="!editor.can().chain().focus().redo().run()"></i>
    <i class="fa-solid fa-paragraph p-2" @click="editor.chain().focus().setParagraph().run()" :class="{ 'is-active': editor.isActive('paragraph') }"></i>
    <span class="p-2" @click="editor.chain().focus().toggleHeading({ level: 1 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }">H1</span>
    <span class="p-2" @click="editor.chain().focus().toggleHeading({ level: 2 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }">H2</span>
    <span class="p-2" @click="editor.chain().focus().toggleHeading({ level: 3 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }">H3</span>
    <span class="p-2" @click="editor.chain().focus().toggleHeading({ level: 4 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 4 }) }">H4</span>
    <span class="p-2" @click="editor.chain().focus().toggleHeading({ level: 5 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 5 }) }">H5</span>
    <span class="p-2" @click="editor.chain().focus().toggleHeading({ level: 6 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 6 }) }">H6</span>
    
  </div>
  <div class="p-2">
    <editor-content :editor="editor" />
  </div>
  
</template>

<script setup>
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'

const editor = useEditor({
  content: `<h2>
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
        
        <p>
          I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too.
        </p>
        <blockquote>
          Wow, that’s amazing. Good work, boy! 👏
          <br />
          — Mom
        </blockquote>`,
  extensions: [
    StarterKit,
  ],
})

</script>

