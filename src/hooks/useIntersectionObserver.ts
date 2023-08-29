// 从Vue中导入ref, onMounted和onUnmounted函数
import { ref, onMounted, onUnmounted } from 'vue'

// 从Vue中导入Ref类型
import type { Ref } from 'vue'

// 定义IntersectionObserver的配置选项接口
interface IntersectionOptions {
  root?: Element | null // 被监听元素的根元素,默认为浏览器视窗
  rootMargin?: string // root边界的扩展区
  threshold?: number | number[] // 交叉界线的阈值,可以是数字或数组
}

// 自定义IntersectionObserver hook函数
const useIntersectionObserver = (
  // 被监听的DOM元素
  target: Ref<Element | null>,

  // IntersectionObserver的配置选项
  options?: IntersectionOptions
) => {
  // 定义一个ref来保存当前元素是否在视口内可见,默认false
  const isVisible = ref(false)

  // IntersectionObserver的回调函数
  const callback: IntersectionObserverCallback = (entries, observer) => {
    // 对每个进入的元素执行回调
    entries.forEach((entry) => {
      // 如果元素进入视口(可见)
      if (entry.isIntersecting) {
        isVisible.value = true

        // 如果元素移出视口(不可见)
      } else {
        isVisible.value = false
      }
    })
  }

  // 创建IntersectionObserver实例
  const observer = new IntersectionObserver(callback, options)

  // 在组件挂载时
  onMounted(() => {
    if (target.value) {
      // 开始观察目标元素
      observer.observe(target.value)
    }
  })

  // 在组件卸载时
  onUnmounted(() => {
    if (target.value) {
      // 停止观察
      observer.unobserve(target.value)
    }
  })

  // 返回是否可见的ref
  return isVisible
}

// 导出这个自定义hook
export default useIntersectionObserver
