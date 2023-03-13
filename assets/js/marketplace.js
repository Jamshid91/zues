const seeMoreBtn = document.querySelector('.see-more'),
      seeMoreText = document.querySelector('.head-info-box__text'),
      priceActive = document.querySelector('.price-head'),
      priceList = document.querySelectorAll('.price-info-list'),
      filterItem = document.querySelectorAll('.filter-item-head'),
      filterBtn = document.querySelector('.filter-btn'),
      filter = document.querySelector('.filter')


let count = 0;
seeMoreBtn.addEventListener('click', () => {
    if(count == 0) {
        seeMoreText.classList.add('showMore');
        seeMoreBtn.children[0].textContent = 'Close'
        return count = 1;
    }else {
        seeMoreText.classList.remove('showMore');
        seeMoreBtn.children[0].textContent = 'See more'
        return count = 0;
    }
});

priceActive.addEventListener('click', () => {
    priceActive.parentElement.classList.toggle('showPriceInfo');
});

priceList.forEach(list => {
    list.addEventListener('click', () => {
        priceActive.children[0].textContent =  list.children[0].textContent;
        priceActive.parentElement.classList.remove('showPriceInfo');
    })
});

filterItem.forEach(filter => {
    filter.addEventListener('click', () => {
        filter.parentElement.classList.toggle('showFilterInfo');
    })
});

filterBtn.addEventListener('click', () => {
    filter.classList.toggle('showFilter')
})