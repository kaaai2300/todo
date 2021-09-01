const $addPlan = document.getElementById('add-plan')
const $clearButton = document.getElementById('clear-plan')

/**
 * 予定の追加処理
 */
$addPlan.addEventListener('click', (e) => {
  // テキストフィールドの入力値を取得
  const $plan = document.getElementById('js-plan')

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
	let planItem = new element("li");
  let planCheckBox = new element("input");
  let planContent = new element("span");

  planItem.addClass("list-group-item plan");
  planCheckBox.addType("checkbox");
  planContent.addClass("ps-3");
  planContent.addTextContent($plan.value);
  planItem.addChild(planCheckBox.getElement());
  planItem.addChild(planContent.getElement());
	$planList.appendChild(planItem.getElement());
  
  // 入力値の初期化
  $plan.value = '';

}

class element {
  
  constructor(tagName) {
    this.element = document.createElement(tagName);
  }

  getElement () {
    return this.element;
  }
  
  addClass (className) {
    this.element.classList = className;
  }

  addTextContent (text) {
    this.element.textContent = text;
  }

  addChild (child) {
    this.element.appendChild(child);
  }

  addType (type) {
    this.element.type = type;
  }
}
