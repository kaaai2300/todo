const $button = document.getElementsByTagName('button')[0]

$button.addEventListener('click', (e) => {
  // 入力値を取得
  const $plan = document.getElementById('js-plan')
  console.log($plan.value);

  if ($plan.value) {
    setPlanList($plan);
  } else {
    window.alert('予定を入力してください。')
  }
})

const setPlanList = ($plan) => {
  // リストに追加
  let $planList = document.getElementsByTagName('ul')[0];
	let $planItem = document.createElement("li");
	$planItem.textContent = $plan.value;
  $planItem.classList = "list-group-item"
	$planList.appendChild($planItem);
  
  // 入力値の初期化
  $plan.value = '';

}
