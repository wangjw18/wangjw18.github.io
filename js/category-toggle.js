function toggleCategory(categoryId) {
  const category = document.getElementById(categoryId);
  const header = document.querySelector(`[onclick="toggleCategory('${categoryId}')"]`);
  
  // 检查是否默认展开
  const isDefaultExpanded = category.classList.contains('default-expanded');
  const isCurrentlyExpanded = category.classList.contains('expanded') || isDefaultExpanded;
  
  if (isCurrentlyExpanded) {
    category.classList.remove('expanded');
    category.classList.remove('default-expanded');
    header.classList.remove('expanded');
    header.classList.remove('default-expanded');
  } else {
    category.classList.add('expanded');
    header.classList.add('expanded');
  }
}

// 初始化函数，确保悬停效果正常工作
function initializeCategoryHeaders() {
  const headers = document.querySelectorAll('.category-header');
  headers.forEach(header => {
    // 添加鼠标事件监听器来确保悬停效果
    header.addEventListener('mouseenter', function() {
      this.style.backgroundColor = '#fff3cd';
    });
    
    header.addEventListener('mouseleave', function() {
      this.style.backgroundColor = '#e9ecef';
    });
  });
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', initializeCategoryHeaders);
