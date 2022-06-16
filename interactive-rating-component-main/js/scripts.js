const d = document;

const ELEMENTS_TO_HIDE = [
	d.querySelector('.star-icon-wrapper'),
	d.querySelector('.component-title'),
	d.querySelector('.rating-wrapper'),
	d.querySelector('.submit-btn'),
];
const ELEMENTS_TO_SHOW = d.querySelectorAll('.hidden');

const $cardContainer = d.querySelector('.rating-component');
const $componentText = d.querySelector('.component-text');
const $ratesBtns = d.querySelectorAll('.rating-btn');
const $submitBtn = d.querySelector('.submit-btn');

let selectedButton;
let selectedRate;

document.addEventListener('click', (e) => {
	if (e.target == $submitBtn) {
    if (selectedRate) {
      hideElements(ELEMENTS_TO_HIDE);
			showElements(ELEMENTS_TO_SHOW);
			const $rateInfo = d.querySelector('.rate-info');
			$rateInfo.textContent = `You selected ${selectedRate} out of 5`;
			$cardContainer.classList.add('center-text');
			$componentText.textContent =
				'We appreciate you taking the time to give a rating. If you ever need more support don’t hesitate to get in touch!';
      } else {
        alert('You have to select a rate');
      }
    }
    
    $ratesBtns.forEach((currentBtn) => {
      if (e.target === currentBtn) {
        if (selectedButton === undefined || selectedButton !== currentBtn) {
          resetButtons();
				selectButton(currentBtn);
				selectedButton = currentBtn;
				selectedRate = selectedButton.textContent;
				return;
			}
      
			if (selectedButton === currentBtn) {
        unselectButton(currentBtn);
				selectedButton = undefined;
				selectedRate = undefined;
			}
		}
	});
});

function selectButton(btn) {
  btn.classList.add('selected');
  btn.classList.remove('unselected');
}

function unselectButton(btn) {
  btn.classList.add('unselected');
  btn.classList.remove('selected');
}

function resetButtons() {
  $ratesBtns.forEach((btn) => {
    unselectButton(btn);
  });
}

function hideElements(els) {
  els.forEach((el) => {
    el.classList.add('hidden');
  });
}

function showElements(els) {
  els.forEach((el) => {
    el.classList.remove('hidden');
  });
}