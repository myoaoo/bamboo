fetch('https://api.vvhan.com/api/visitor.info')
	.then(response => response.json())
	.then(data => {
		const visitorInfo = document.getElementById('visitorInfo');
		visitorInfo.innerHTML = `
			<p>欢迎来自 ${data.location} 的朋友</p>
			<p>IP：${data.ip}</p>
			<p>天气：${data.tq}，温度 ${data.low} ~ ${data.high}</p>
			<p>风力：${data.fl}</p>
			<p>提示：${data.tip}</p>
		`;
	})
	.catch(error => {
		const visitorInfo = document.getElementById('visitorInfo');
		visitorInfo.innerHTML = `<p>发生错误：${error}</p>`;
	});