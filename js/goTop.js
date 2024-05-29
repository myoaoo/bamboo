document.addEventListener('DOMContentLoaded', function () {
  const backBtn = document.querySelector('.goTop');
  const goDownBtn = document.querySelector('.godown');
  
  isShow();
  
  // 判断是否显示返回顶部按钮
  window.addEventListener('scroll', function () {
    isShow();
  });
  
  function isShow() {
    if (window.scrollY > 100) {
      backBtn.style.display = 'block';
      backBtn.style.transform = 'translateY(0)';
    } else {
      backBtn.style.transform = 'translateY(120px)';
    }
  }
  
  // 返回顶部按钮点击事件
  backBtn.addEventListener('click', function () {
    scrollToTop(500); // 滚动到顶部，时长为500ms
  });

  // 滚动到底部按钮点击事件
  goDownBtn.addEventListener('click', function () {
    scrollToBottom(500); // 滚动到底部，时长为500ms
  });

  // 滚动到顶部函数
  function scrollToTop(duration) {
    const startingY = window.scrollY;
    const startTime = performance.now();

    function easeInOutQuad(time, start, change, duration) {
      time /= duration / 2;
      if (time < 1) return change / 2 * time * time + start;
      time--;
      return -change / 2 * (time * (time - 2) - 1) + start;
    }

    function animate(currentTime) {
      const elapsedTime = currentTime - startTime;
      window.scrollTo(0, easeInOutQuad(elapsedTime, startingY, -startingY, duration));
      if (elapsedTime < duration) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }

  // 滚动到底部函数
  function scrollToBottom(duration) {
    const startingY = window.scrollY;
    const documentHeight = document.body.scrollHeight;
    const windowHeight = window.innerHeight;
    const startY = startingY;
    const endY = documentHeight - windowHeight;
    const distance = endY - startY;
    const startTime = performance.now();

    function easeInOutQuad(time, start, change, duration) {
      time /= duration / 2;
      if (time < 1) return change / 2 * time * time + start;
      time--;
      return -change / 2 * (time * (time - 2) - 1) + start;
    }

    function animate(currentTime) {
      const elapsedTime = currentTime - startTime;
      window.scrollTo(0, easeInOutQuad(elapsedTime, startY, distance, duration));
      if (elapsedTime < duration) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }
});
