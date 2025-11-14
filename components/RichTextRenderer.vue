<template>
  <div class="rich-text-content">
    <!-- Handle string format (plain text or markdown) -->
    <div v-if="typeof body === 'string'">
      <div v-for="(paragraph, index) in body.split('\n\n')" :key="index" class="mb-4">
        {{ paragraph }}
      </div>
    </div>
    
    <!-- Handle JSON object format -->
    <div v-else-if="body && body.children">
      <div v-for="(node, index) in body.children" :key="index">
      <!-- Paragraph -->
      <p v-if="node.type === 'p'" class="mb-4">
        <span v-for="(child, childIndex) in node.children || []" :key="childIndex">
          <span v-if="child.type === 'text'" :class="getTextClasses(child)">
            {{ child.text }}
          </span>
          <br v-else-if="child.type === 'br'" />
        </span>
      </p>
      
      <!-- Heading 1 -->
      <h1 v-else-if="node.type === 'h1'" class="text-4xl font-bold mb-6">
        <span v-for="(child, childIndex) in node.children || []" :key="childIndex">
          <span v-if="child.type === 'text'" :class="getTextClasses(child)">
            {{ child.text }}
          </span>
        </span>
      </h1>
      
      <!-- Heading 2 -->
      <h2 v-else-if="node.type === 'h2'" class="text-3xl font-bold mb-4">
        <span v-for="(child, childIndex) in node.children || []" :key="childIndex">
          <span v-if="child.type === 'text'" :class="getTextClasses(child)">
            {{ child.text }}
          </span>
        </span>
      </h2>
      
      <!-- Heading 3 -->
      <h3 v-else-if="node.type === 'h3'" class="text-2xl font-bold mb-3">
        <span v-for="(child, childIndex) in node.children || []" :key="childIndex">
          <span v-if="child.type === 'text'" :class="getTextClasses(child)">
            {{ child.text }}
          </span>
        </span>
      </h3>
      
      <!-- Unordered List -->
      <ul v-else-if="node.type === 'ul'" class="list-disc list-inside mb-4">
        <li v-for="(item, itemIndex) in node.children || []" :key="itemIndex" class="mb-2">
          <span v-for="(child, childIndex) in item.children || []" :key="childIndex">
            <span v-if="child.type === 'text'" :class="getTextClasses(child)">
              {{ child.text }}
            </span>
          </span>
        </li>
      </ul>
      
      <!-- Ordered List -->
      <ol v-else-if="node.type === 'ol'" class="list-decimal list-inside mb-4">
        <li v-for="(item, itemIndex) in node.children || []" :key="itemIndex" class="mb-2">
          <span v-for="(child, childIndex) in item.children || []" :key="childIndex">
            <span v-if="child.type === 'text'" :class="getTextClasses(child)">
              {{ child.text }}
            </span>
          </span>
        </li>
      </ol>
      
      <!-- Blockquote -->
      <blockquote v-else-if="node.type === 'blockquote'" class="border-l-4 border-gray-300 pl-4 italic mb-4">
        <span v-for="(child, childIndex) in node.children || []" :key="childIndex">
          <span v-if="child.type === 'text'" :class="getTextClasses(child)">
            {{ child.text }}
          </span>
        </span>
      </blockquote>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface TextNode {
  type: 'text'
  text: string
  bold?: boolean
  italic?: boolean
  underline?: boolean
  strikethrough?: boolean
}

interface RichTextNode {
  type: string
  children?: (TextNode | RichTextNode)[]
}

interface Props {
  body?: RichTextNode | string
}

const props = defineProps<Props>()


const getTextClasses = (node: TextNode) => {
  const classes = []
  if (node.bold) classes.push('font-bold')
  if (node.italic) classes.push('italic')
  if (node.underline) classes.push('underline')
  if (node.strikethrough) classes.push('line-through')
  return classes.join(' ')
}
</script>

<style scoped>
.rich-text-content {
  line-height: 1.6;
}

.rich-text-content p:last-child {
  margin-bottom: 0;
}
</style>
