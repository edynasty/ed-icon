<template>
  <div class="all-icons-showcase">
    <div class="showcase-header">
      <h1>🎨 ED Icon 完整图标集</h1>
      <p class="subtitle">{{ totalIcons }} 个精美图标，点击复制组件名称</p>

      <div class="stats">
        <div class="stat-item">
          <span class="stat-number">{{ allIconList.length }}</span>
          <span class="stat-label">总图标数</span>
        </div>
        <div class="stat-item">
          <span class="stat-number">{{ filteredIcons.length }}</span>
          <span class="stat-label">当前显示</span>
        </div>
        <div class="stat-item">
          <span class="stat-number">{{ categories.length - 1 }}</span>
          <span class="stat-label">分类</span>
        </div>
      </div>
    </div>

    <div class="controls">
      <div class="search-container">
        <div class="search-input-wrapper">
          <svg
            class="search-icon"
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="currentColor"
          >
            <path
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              stroke="currentColor"
              stroke-width="2"
              fill="none"
            />
          </svg>
          <input
            v-model="searchQuery"
            type="text"
            placeholder="搜索图标名称..."
            class="search-input"
          />
          <button
            v-if="searchQuery"
            @click="searchQuery = ''"
            class="clear-search"
          >
            ✕
          </button>
        </div>
      </div>

      <div class="category-filters">
        <button
          v-for="category in categories"
          :key="category.key"
          :class="[
            'category-btn',
            { active: selectedCategory === category.key },
          ]"
          @click="selectedCategory = category.key"
        >
          {{ category.label }}
          <span class="category-count">{{
            getCategoryCount(category.key)
          }}</span>
        </button>
      </div>

      <div class="view-options">
        <label class="size-control">
          图标大小:
          <input
            v-model="iconSize"
            type="range"
            min="16"
            max="40"
            step="2"
            class="size-slider"
          />
          <span class="size-value">{{ iconSize }}px</span>
        </label>
      </div>
    </div>

    <div class="icons-grid" :style="gridStyle">
      <div
        v-for="iconName in filteredIcons"
        :key="iconName"
        class="icon-item"
        @click="copyComponentName(iconName)"
        :title="`点击复制: <${iconName} />`"
        :style="{ '--icon-size': iconSizeNumber + 'px' }"
      >
        <div class="icon-container">
          <component
            :is="iconName"
            :style="{
              width: iconSizeNumber + 'px',
              height: iconSizeNumber + 'px',
              maxWidth: '100%',
              maxHeight: '100%',
              objectFit: 'contain',
            }"
            class="icon-svg"
          />
        </div>
        <div class="icon-name">{{ iconName }}</div>
        <div class="icon-usage">&lt;{{ iconName }} /&gt;</div>
      </div>
    </div>

    <div class="usage-guide">
      <h3>💡 使用指南</h3>
      <div class="usage-grid">
        <div class="usage-card">
          <h4>1. 安装依赖</h4>
          <pre><code>npm install @ed-ui/icons-vue</code></pre>
        </div>

        <div class="usage-card">
          <h4>2. 导入使用</h4>
          <pre><code>import { Home, Add, Settings } from '@ed-ui/icons-vue'</code></pre>
        </div>

        <div class="usage-card">
          <h4>3. 模板中使用</h4>
          <pre><code>&lt;Home :size="24" color="#1890ff" /&gt;</code></pre>
        </div>

        <div class="usage-card">
          <h4>4. 配合容器使用</h4>
          <pre><code>&lt;EdIcon spin&gt;&lt;Loading /&gt;&lt;/EdIcon&gt;</code></pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const searchQuery = ref("");
const selectedCategory = ref("all");
const iconSize = ref(24);

// 所有图标名称列表（265个图标）
const allIconList = [
  "About",
  "Aboutfill",
  "Accelerometer",
  "Add",
  "Alignbottom",
  "Aligncenter",
  "Alignjustify",
  "Alignleft",
  "Alignmiddle",
  "Alignright",
  "Aligntop",
  "Analytics",
  "Angry",
  "Angryfill",
  "Archive",
  "Areachart",
  "Arrowdown",
  "Arrowleft",
  "Arrowright",
  "Arrowup",
  "Audio",
  "Barchart",
  "Barcode",
  "Battery",
  "Bell",
  "Bgcolors",
  "Binary",
  "Bluetooth",
  "Bold",
  "Bookmark",
  "Bookmarkfill",
  "Boxplot",
  "Brightness1",
  "Brightness2",
  "Brightness3",
  "Broadcast",
  "Brush",
  "Calculator",
  "Calendar",
  "Call",
  "Card",
  "Cast",
  "Cellular",
  "Certificate",
  "Chat",
  "Chatadd",
  "Chatright",
  "Chatwrong",
  "Check",
  "Checkbox",
  "Checkboxchecked",
  "Clock",
  "Close",
  "Collapse",
  "Columns",
  "Compass",
  "Copy",
  "Crop",
  "Crypto",
  "Cut",
  "Data",
  "Dataset",
  "Debug",
  "Delete",
  "Dialog",
  "Dialogfill",
  "Dislike",
  "Dislikefill",
  "Doubledown",
  "Doubleleft",
  "Doubleright",
  "Doubleup",
  "Down",
  "Download",
  "Dropdown",
  "Edit",
  "Email",
  "Equation",
  "Eraser",
  "Errorfill",
  "Expand",
  "Experiment",
  "External",
  "Eye",
  "Eyeoff",
  "File",
  "Filter",
  "Fingerprint",
  "Flag",
  "Flagfill",
  "Flashlight1",
  "Flashlight1fill",
  "Flashlight2",
  "Flashlight2off",
  "Flip",
  "Flip2",
  "Folder",
  "Fontcolors",
  "Fontsize",
  "Forward",
  "Framework",
  "Fullscreen",
  "Function",
  "Graph",
  "Grid",
  "Group",
  "Heart",
  "Heartfill",
  "Help",
  "Helpfill",
  "Hexagon",
  "Home",
  "Hot",
  "Hotspot",
  "Image",
  "Indent",
  "Infofill",
  "Input",
  "Italic",
  "Laugh",
  "Laughfill",
  "Layers",
  "Layersfill",
  "Layout",
  "Layoutfill",
  "Left",
  "Library",
  "License",
  "Like",
  "Likefill",
  "Linechart",
  "Link",
  "List",
  "Loading",
  "Location",
  "Lock",
  "Locked",
  "Lockedfill",
  "Login",
  "Logout",
  "Magic",
  "Map",
  "Math",
  "Mathematics",
  "Matrix",
  "Maximize",
  "Maximize2",
  "Mention",
  "Menu",
  "Message",
  "Minimize",
  "Minimize2",
  "Minus",
  "Mirror",
  "Model",
  "More",
  "Move",
  "Mute",
  "Navigation",
  "Network",
  "New",
  "Nfc",
  "Notification",
  "Number",
  "Outdent",
  "Package",
  "Palette",
  "Panel",
  "Paste",
  "Pause",
  "Pen",
  "Penfill",
  "Percentage",
  "Phone",
  "Photo",
  "Pi",
  "Pictureinpicture",
  "Piechart",
  "Pin",
  "Play",
  "Plus",
  "Popularfill",
  "Printer",
  "Profile",
  "Progress",
  "Qrcode",
  "Question",
  "Questionfill",
  "Radiobox",
  "Record",
  "Redo",
  "Refresh",
  "Refreshleft",
  "Refreshright",
  "Reply",
  "Replyfill",
  "Required",
  "Right",
  "Rotateleft",
  "Rotateright",
  "Round",
  "Rows",
  "Sad",
  "Sadfill",
  "Save",
  "Scan",
  "Search",
  "Select",
  "Settings",
  "Share",
  "Sidebar",
  "Sigma",
  "Sms",
  "Sort",
  "Sortdown",
  "Sortup",
  "Speaker",
  "Spinner",
  "Splitscreen",
  "Staroff",
  "Staron",
  "Steps",
  "Stop",
  "Strikethrough",
  "Successfill",
  "Support",
  "Swift",
  "Switchofff",
  "Switchofffill",
  "Switchon",
  "Switchonfill",
  "Tab",
  "Table",
  "Tag",
  "Textarea",
  "Textsize",
  "Timer",
  "Tooltip",
  "Tooltipfill",
  "Tooltipfilledit",
  "Tooltipfillimage",
  "Tooltipfilltext",
  "Tooltipplus",
  "Underline",
  "Undo",
  "Ungroup",
  "Unlock",
  "Unlocked",
  "Unlockedfill",
  "Up",
  "Update",
  "Upload",
  "User",
  "Version",
  "Vibrations",
  "Vibrationsoff",
  "Video",
  "Volume",
  "Wallet",
  "Wand",
  "Warning",
  "Warningfill",
  "Wifi",
  "Zoomin",
  "Zoomout",
];

const categories = [
  { key: "all", label: "全部" },
  { key: "common", label: "常用" },
  { key: "action", label: "操作" },
  { key: "status", label: "状态" },
  { key: "media", label: "媒体" },
  { key: "navigation", label: "导航" },
  { key: "ui", label: "界面" },
  { key: "data", label: "数据" },
  { key: "device", label: "设备" },
];

// 图标分类映射
const iconCategories = {
  // 常用图标
  common: [
    "Home",
    "User",
    "Settings",
    "Search",
    "Menu",
    "Bell",
    "Heart",
    "About",
    "Analytics",
    "Calendar",
    "Clock",
    "Email",
    "File",
    "Folder",
    "Graph",
    "Help",
    "Image",
    "Library",
    "List",
    "Location",
    "Message",
    "Phone",
    "Profile",
    "Tag",
    "Timer",
  ],

  // 操作图标
  action: [
    "Add",
    "Delete",
    "Edit",
    "Copy",
    "Cut",
    "Save",
    "Upload",
    "Download",
    "Refresh",
    "Archive",
    "Bookmark",
    "Filter",
    "Like",
    "Link",
    "Move",
    "Paste",
    "Share",
    "Undo",
    "Redo",
    "Select",
    "Group",
    "Ungroup",
  ],

  // 状态图标
  status: [
    "Check",
    "Close",
    "Warning",
    "Error",
    "Success",
    "Help",
    "Loading",
    "Battery",
    "Lock",
    "Unlock",
    "Notification",
    "Required",
    "Infofill",
    "Errorfill",
    "Successfill",
    "Warningfill",
  ],

  // 媒体图标
  media: [
    "Play",
    "Pause",
    "Stop",
    "Volume",
    "Mute",
    "Audio",
    "Video",
    "Image",
    "Camera",
    "Record",
    "Cast",
    "Broadcast",
  ],

  // 导航图标
  navigation: [
    "Arrowup",
    "Arrowdown",
    "Arrowleft",
    "Arrowright",
    "Up",
    "Down",
    "Left",
    "Right",
    "Forward",
    "External",
    "Navigation",
    "Compass",
  ],

  // 界面图标
  ui: [
    "Grid",
    "List",
    "Layout",
    "Sidebar",
    "Panel",
    "Tab",
    "Dialog",
    "Tooltip",
    "Menu",
    "More",
    "Expand",
    "Collapse",
    "Fullscreen",
    "Minimize",
    "Maximize",
  ],

  // 数据图标
  data: [
    "Data",
    "Dataset",
    "Chart",
    "Graph",
    "Analytics",
    "Barchart",
    "Linechart",
    "Piechart",
    "Areachart",
    "Boxplot",
    "Mathematics",
    "Number",
    "Percentage",
  ],

  // 设备图标
  device: [
    "Phone",
    "Computer",
    "Tablet",
    "Watch",
    "Camera",
    "Printer",
    "Speaker",
    "Wifi",
    "Bluetooth",
    "Cellular",
    "Battery",
    "Nfc",
  ],
};

const totalIcons = computed(() => allIconList.length);

// 确保iconSize为数字类型
const iconSizeNumber = computed(() => Number(iconSize.value));

const filteredIcons = computed(() => {
  let filtered = allIconList;

  // 按类别筛选
  if (selectedCategory.value !== "all") {
    const categoryIcons = iconCategories[selectedCategory.value] || [];
    filtered = filtered.filter((icon) => categoryIcons.includes(icon));
  }

  // 按搜索词筛选
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    filtered = filtered.filter((icon) => icon.toLowerCase().includes(query));
  }

  return filtered;
});

const gridStyle = computed(() => ({
  gridTemplateColumns: `repeat(auto-fill, minmax(${Math.max(
    70,
    iconSizeNumber.value + 15
  )}px, 1fr))`,
  "--dynamic-icon-size": `${iconSizeNumber.value}px`,
  "--dynamic-container-height": `${iconSizeNumber.value + 30}px`,
}));

function getCategoryCount(categoryKey) {
  if (categoryKey === "all") return allIconList.length;
  const categoryIcons = iconCategories[categoryKey] || [];
  return allIconList.filter((icon) => categoryIcons.includes(icon)).length;
}

async function copyComponentName(iconName) {
  try {
    await navigator.clipboard.writeText(`<${iconName} />`);

    // 创建提示
    const toast = document.createElement("div");
    toast.textContent = `已复制: <${iconName} />`;
    toast.className = "copy-toast";
    document.body.appendChild(toast);

    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 2000);
  } catch (err) {
    console.error("复制失败:", err);
    alert(`已复制: <${iconName} />`);
  }
}
</script>

<style scoped>
.all-icons-showcase {
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;
}

.showcase-header {
  text-align: center;
  margin-bottom: 40px;
}

.showcase-header h1 {
  color: var(--vp-c-text-1);
  margin-bottom: 12px;
  font-size: 2.5rem;
  font-weight: 700;
}

.subtitle {
  color: var(--vp-c-text-2);
  font-size: 1.1rem;
  margin-bottom: 24px;
}

.stats {
  display: flex;
  justify-content: center;
  gap: 32px;
  margin-bottom: 20px;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-number {
  font-size: 2rem;
  font-weight: 700;
  color: var(--vp-c-brand-1);
}

.stat-label {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  margin-top: 4px;
}

.controls {
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 32px;
  border: 1px solid var(--vp-c-divider);
}

.search-container {
  margin-bottom: 24px;
}

.search-input-wrapper {
  position: relative;
  max-width: 400px;
  margin: 0 auto;
}

.search-icon {
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--vp-c-text-2);
}

.search-input {
  width: 100%;
  padding: 12px 20px 12px 50px;
  border: 2px solid var(--vp-c-divider);
  border-radius: 25px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s ease;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
}

.search-input:focus {
  border-color: var(--vp-c-brand-1);
}

.clear-search {
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: var(--vp-c-text-2);
  cursor: pointer;
  padding: 4px;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.clear-search:hover {
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
}

.category-filters {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  margin-bottom: 24px;
}

.category-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border: 2px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 14px;
  font-weight: 500;
}

.category-btn:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

.category-btn.active {
  background: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-1);
  color: white;
}

.category-count {
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-2);
  padding: 2px 6px;
  border-radius: 10px;
  font-size: 12px;
  font-weight: 600;
}

.category-btn.active .category-count {
  background: rgba(255, 255, 255, 0.2);
  color: white;
}

.view-options {
  display: flex;
  justify-content: center;
}

.size-control {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 14px;
  color: var(--vp-c-text-1);
}

.size-slider {
  width: 120px;
}

.size-value {
  font-weight: 600;
  color: var(--vp-c-brand-1);
  min-width: 40px;
}

.icons-grid {
  display: grid;
  gap: 12px;
  margin-bottom: 40px;
}

.icon-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 6px 4px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  background: var(--vp-c-bg);
  height: var(--dynamic-container-height, 68px);
  width: 100%;
}

.icon-item:hover {
  border-color: var(--vp-c-brand-1);
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.icon-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: var(--dynamic-icon-size, 32px);
  margin-bottom: 2px;
  overflow: hidden;
}

.icon-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: calc(var(--icon-size, 32px) * 0.6);
  color: var(--vp-c-text-2);
  border: 1px dashed var(--vp-c-divider);
  border-radius: 4px;
}

.icon-svg {
  max-width: 100%;
  max-height: 100%;
  flex-shrink: 0;
}

.icon-item:hover .icon-svg {
  color: var(--vp-c-brand-1);
}

.icon-name {
  font-weight: 500;
  color: var(--vp-c-text-1);
  margin-bottom: 1px;
  font-size: 10px;
  text-align: center;
  line-height: 1;
}

.icon-usage {
  font-family: "Monaco", "Menlo", "Ubuntu Mono", monospace;
  font-size: 8px;
  color: var(--vp-c-text-2);
  background: var(--vp-c-bg-soft);
  padding: 1px 2px;
  border-radius: 2px;
  text-align: center;
  line-height: 1;
}

.usage-guide {
  border-top: 1px solid var(--vp-c-divider);
  padding-top: 40px;
}

.usage-guide h3 {
  color: var(--vp-c-text-1);
  margin-bottom: 24px;
  text-align: center;
  font-size: 1.5rem;
}

.usage-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
}

.usage-card {
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 24px;
  background: var(--vp-c-bg-soft);
}

.usage-card h4 {
  color: var(--vp-c-text-1);
  margin: 0 0 16px 0;
  font-size: 16px;
}

.usage-card pre {
  margin: 0;
  padding: 16px;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  overflow-x: auto;
}

.usage-card code {
  font-family: "Monaco", "Menlo", "Ubuntu Mono", monospace;
  font-size: 13px;
  line-height: 1.5;
  color: var(--vp-c-text-1);
}

@media (max-width: 768px) {
  .showcase-header h1 {
    font-size: 2rem;
  }

  .stats {
    gap: 16px;
  }

  .stat-number {
    font-size: 1.5rem;
  }

  .controls {
    padding: 16px;
  }

  .icons-grid {
    grid-template-columns: repeat(auto-fill, minmax(60px, 1fr)) !important;
    gap: 6px;
  }

  .icon-item {
    padding: 4px 2px;
    height: 58px;
  }

  .icon-container {
    height: 30px;
  }

  .icon-item svg {
    width: 18px;
    height: 18px;
    max-width: 100%;
    max-height: 100%;
  }
  .usage-grid {
    grid-template-columns: 1fr;
  }

  .usage-card {
    padding: 16px;
  }

  .category-filters {
    gap: 8px;
  }

  .category-btn {
    padding: 6px 12px;
    font-size: 13px;
  }
}

/* 复制提示样式 */
:global(.copy-toast) {
  position: fixed;
  top: 20px;
  right: 20px;
  background: #52c41a;
  color: white;
  padding: 12px 20px;
  border-radius: 6px;
  z-index: 1000;
  font-size: 14px;
  font-weight: 500;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  animation: fadeInOut 2s ease-in-out;
}

@keyframes fadeInOut {
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
  20% {
    opacity: 1;
    transform: translateY(0);
  }
  80% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-10px);
  }
}
</style>
