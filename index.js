const $addPlan = document.getElementById('add-plan')
const $clearButton = document.getElementById('clear-plan')

/**
 * 予定の追加処理
 */
$addPlan.addEventListener('click', (e) => {
  // 入力値を取得
  const $plan = document.getElementById('js-plan')
  console.log($plan.value);

  if ($plan.value) {
    setPlanList($plan);
  } else {
    window.alert('予定を入力してください。')
  }
})

/**
 * 削除処理
 */
$clearButton.addEventListener('click', (e) => {
  const $allPlans = document.getElementsByClassName('plan')

  if ($allPlans.length !== 0) {
    for(let i = $allPlans.length - 1; i >= 0; i--) {
      $allPlans[i].remove();
    }
  } else {
    window.alert('予定を入力してください。')
  }
})

const setPlanList = ($plan) => {
  // リストに追加
  let $planList = document.getElementsByTagName('ul')[0];
	let $planItem = document.createElement("li");
	$planItem.textContent = $plan.value;
  $planItem.classList = "list-group-item plan"
	$planList.appendChild($planItem);
  
  // 入力値の初期化
  $plan.value = '';

}
