(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e){if(t.type!==`childList`)continue;for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();const e=`modulepreload`,t=function(e){return`/front_6th_chapter1-1/`+e},n={},r=function(r,i,a){let o=Promise.resolve();if(i&&i.length>0){let r=document.getElementsByTagName(`link`),s=document.querySelector(`meta[property=csp-nonce]`),c=s?.nonce||s?.getAttribute(`nonce`);function l(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}o=l(i.map(i=>{if(i=t(i,a),i in n)return;n[i]=!0;let o=i.endsWith(`.css`),s=o?`[rel="stylesheet"]`:``,l=!!a;if(l)for(let e=r.length-1;e>=0;e--){let t=r[e];if(t.href===i&&(!o||t.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${i}"]${s}`))return;let u=document.createElement(`link`);if(u.rel=o?`stylesheet`:e,o||(u.as=`script`),u.crossOrigin=``,u.href=i,c&&u.setAttribute(`nonce`,c),document.head.appendChild(u),o)return new Promise((e,t)=>{u.addEventListener(`load`,e),u.addEventListener(`error`,()=>t(Error(`Unable to preload CSS for ${i}`)))})}))}function s(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return o.then(e=>{for(let t of e||[]){if(t.status!==`rejected`)continue;s(t.reason)}return r().catch(s)})};var i=class e{constructor(t,n){this.routes=t,this.rootElement=n,this.queryParams={},this.params={},e.instance=this,this.init()}init(){window.addEventListener(`popstate`,()=>{this.handleRouteChange()}),this.handleRouteChange()}handleRouteChange(){this.parseQueryParams(),this.render()}render(){console.log(`BASE`,Y),console.log(`currentPath`,this.getCurrentPath());let e=this.getCurrentRoute();this.currentInstance&&this.currentInstance.destroy&&this.currentInstance.destroy();let t=e.component;this.currentInstance=new t(this.rootElement,{params:this.params,query:this.queryParams})}navigate(e,t=!1){let n=this.normalizePath(e);t?window.history.replaceState(null,``,n):window.history.pushState(null,``,n),this.handleRouteChange()}normalizePath(e){if(e.includes(`?`)){let[t,n]=e.split(`?`),r=t.startsWith(`/`)?t:`/${t}`,i=Y===`/`?r:`${Y.slice(0,-1)}${r}`;return`${i}?${n}`}let t=e.startsWith(`/`)?e:`/${e}`;return Y===`/`?t:`${Y.slice(0,-1)}${t}`}getCurrentPath(){let e=window.location.pathname;if(Y!==`/`){let t=Y.slice(0,-1);if(e.startsWith(t))return e.slice(t.length)||`/`}return e}parseQueryParams(){let e={...this.queryParams};this.queryParams={};let t=new URLSearchParams(window.location.search);for(let[e,n]of t)this.queryParams[e]=n;let n=JSON.stringify(e)!==JSON.stringify(this.queryParams);n&&this.dispatchQueryParamsChange()}getCurrentRoute(){let e=this.getCurrentPath(),t=this.routes.find(t=>t.path===e);if(t)return this.params={},t;let n=this.routes.find(t=>{if(t.path.includes(`:`)){let n=t.path.split(`/`),r=e.split(`/`);if(n.length!==r.length)return!1;let i=n.every((e,t)=>e.startsWith(`:`)?!0:e===r[t]);if(i)return this.params={},n.forEach((e,t)=>{if(e.startsWith(`:`)){let n=e.substring(1);this.params[n]=r[t]}}),!0}return!1});if(n)return n;let r=this.routes.find(e=>e.path===`*`);return r||null}getCurrentComponent(){let e=this.getCurrentRoute();return e.component}getParams(e){return e?this.params[e]:{...this.params}}setParam(e,t){this.params[e]=t}setParams(e){this.params=e}getQueryParams(e){return e?this.queryParams[e]:{...this.queryParams}}setQueryParam(e,t){t==null||t===``?delete this.queryParams[e]:this.queryParams[e]=t,this.updateURL()}setQueryParams(e){Object.keys(this.queryParams).forEach(e=>{delete this.queryParams[e]}),Object.entries(e).forEach(([e,t])=>{t!=null&&t!==``&&(this.queryParams[e]=t)}),this.updateURL()}updateURL(){let e=new URL(window.location),t=this.getCurrentPath(),n=Y===`/`?t:`${Y.slice(0,-1)}${t}`;e.pathname=n,e.search=``,Object.entries(this.queryParams).forEach(([t,n])=>{n!=null&&n!==``&&e.searchParams.set(t,n.toString())}),window.history.replaceState(null,``,e.toString()),this.dispatchQueryParamsChange()}dispatchQueryParamsChange(){let e=new CustomEvent(`queryParamsChange`,{detail:{queryParams:{...this.queryParams}}});window.dispatchEvent(e)}static getInstance(){return e.instance||null}};async function a(e={}){let{limit:t=20,search:n=``,category1:r=``,category2:i=``,sort:a=`price_asc`}=e,o=e.current??e.page??1,s=new URLSearchParams({page:o.toString(),limit:t.toString(),...n&&{search:n},...r&&{category1:r},...i&&{category2:i},sort:a}),c=await fetch(`/api/products?${s}`);return await c.json()}async function o(e){let t=await fetch(`/api/products/${e}`);return await t.json()}async function s(){let e=await fetch(`/api/categories`);return await e.json()}function c(){return`<footer class="bg-white shadow-sm sticky top-0 z-40">
    <div class="max-w-md mx-auto py-8 text-center text-gray-500">
      <p>© 2025 항해플러스 프론트엔드 쇼핑몰</p>
    </div>
  </footer>`}var l=class{$target;props;state;constructor(e,t){this.$target=e,this.props=t,this.state={},this.child=new Map,this.setup(),this.render()}setup(){}mounted(){}template(){return``}unmount(){this.cleanup(),this.child.forEach(e=>e.cleanup?.()),this.child.clear(),this.$target.innerHTML=``}cleanup(){}render(){this.$target.innerHTML=this.template(),this.setEvent(),this.mounted?.()}setEvent(){}setState(e){this.state={...this.state,...e},this.render()}getState(){return this.state}addChild(e,t){this.child.set(t,e)}removeChild(e){let t=this.child.get(e);t?.cleanup&&t.cleanup(),this.child.delete(e)}destroy(){this.cleanup(),this.child.forEach(e=>e.cleanup?.()),this.child.clear(),this.$target.innerHTML=``}};const u=20,d=1,f=1,p={PRICE_ASC:`price_asc`,PRICE_DESC:`price_desc`,NAME_ASC:`name_asc`,NAME_DESC:`name_desc`},m=p.PRICE_ASC;var h=class e{static#instance;#state;#observers;constructor(t){if(e.#instance)return e.#instance;this.#state={...t},this.#observers=new Set,e.#instance=this}getState(){return{...this.#state}}setState(e){let t=(e,n)=>{let r={...e};for(let i in n)n[i]&&typeof n[i]==`object`&&!Array.isArray(n[i])?r[i]=t(e[i]||{},n[i]):r[i]=n[i];return r};this.#state=t(this.#state,e),this.#notify()}subscribe(e){return this.#observers.add(e),e(this.getState()),()=>{this.#observers.delete(e)}}#notify(){this.#observers.forEach(e=>e(this.getState()))}reset(e){this.#state={...e},this.#notify()}static resetInstance(){e.#instance=null}};const g={INITIAL:`INITIAL`,INFINITE_SCROLL:`INFINITE_SCROLL`},_={products:{list:[],total:0,isProductsLoading:!1,isMoreProductsLoading:!1,pagination:{page:d,totalPages:0,hasNext:!1,hasPrev:!1},productListMode:g.INITIAL},categories:{categoryList:[],isCategoryLoading:!1},cart:{items:[],selectedItems:[]}},v=new h(_);var y=class extends l{template(){let{items:e}=v.getState().cart,t=e.length===0;return`<header class="bg-white shadow-sm sticky top-0 z-40">
      <div class="max-w-md mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <h1 class="text-xl font-bold text-gray-900">
            <a href="/" data-link="">쇼핑몰</a>
          </h1>
          <div class="flex items-center space-x-2">
            <!-- 장바구니 아이콘 -->
            <button
              id="cart-icon-btn"
              class="relative p-2 text-gray-700 hover:text-gray-900 transition-colors"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L6 2H3m4 11v6a1 1 0 001 1h1a1 1 0 001-1v-6M13 13v6a1 1 0 001 1h1a1 1 0 001-1v-6"
                ></path>
              </svg>
              ${t?``:`<span
                class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"
                >${e.length}</span
              >`}
            </button>
          </div>
        </div>
      </div>
    </header>`}};function b(e){let t=i.getInstance();if(!t){console.warn(`useParam: Router instance not found`);return}return[t.getParams(e),n=>t.setParam(e,n)]}function x(){let e=i.getInstance();return e?[e.getQueryParams(),e.setQueryParams]:(console.warn(`useQueryParams: Router instance not found`),{})}function S(){let e=i.getInstance();if(!e){console.warn(`useQueryParam: Router instance not found`);return}return(t,n)=>e.setQueryParam(t,n)}function C(){let e=i.getInstance();return e?{navigate:(t,n=!1)=>e.navigate(t,n),currentPath:e.getCurrentPath()}:(console.warn(`useNavigate: Router instance not found`),{navigate:()=>{},currentPath:``})}function w(e,t,n=[]){for(let r in e){let i=[...n,r];if(r===t)return i;let a=e[r];if(a&&typeof a==`object`){let e=w(a,t,i);if(e.length)return e}}return[]}function T(e,t){if(!t)return Object.keys(e);for(let n in e){if(n===t)return Object.keys(e[n]);let r=e[n];if(r&&typeof r==`object`){let e=T(r,t);if(e)return e}}return[]}function E(){let[e]=x(),t=e.limit||u,n=e.sort||m,r=e.search||``,i=e.category1||``,a=e.category2||``;return{limit:t,sort:n,search:r,category1:i,category2:a}}function D(){let{category1:e,category2:t}=E();return t||e||``}var O=class extends l{setup(){}selectBreadcrumb(){let e=S(),t=document.querySelector(`[data-breadcrumb="reset"]`),n=document.querySelectorAll(`[data-breadcrumb="category"]`);t.addEventListener(`click`,()=>{v.setState({categories:{currentCategory:``}}),e(`category1`,``),e(`category2`,``)}),n.forEach(t=>{let{categoryList:n}=v.getState().categories;t.addEventListener(`click`,()=>{let r=t.getAttribute(`data-category`),i=w(n,r),a=i[0]||``,o=i[1]||``;v.setState({categories:{currentCategory:r}}),e(`category1`,a),e(`category2`,o)})})}setEvent(){this.selectBreadcrumb()}section(e){return`<span class="text-xs text-gray-500">&gt;</span>
      <button
        data-breadcrumb="category"
        data-category=${e}
        class="text-xs hover:text-blue-800 hover:underline"
      >
        ${e}
      </button>`}template(){let{categories:{categoryList:e}}=v.getState(),t=D(),n=w(e,t);return`
      <button data-breadcrumb="reset" class="text-xs hover:text-blue-800 hover:underline">
        전체
      </button>
      ${n.map(this.section).join(``)}
    `}};function k({category:e}){return`<button
    data-category=${e}
    class="category-filter-btn text-left px-3 py-2 text-sm rounded-md border transition-colors
                   bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
  >
    ${e}
  </button>`}var A=class extends l{setup(){this.child=new Map,this.selectLimit=this.selectLimit.bind(this),this.selectSort=this.selectSort.bind(this),this.search=this.search.bind(this),this.selectCategory=this.selectCategory.bind(this),this.unsubscribe=v.subscribe(()=>{let e=i.getInstance(),t=e?.getCurrentPath();t===`/`&&(this.render(),this.setEvent(),this.mounted())}),this.setState({categoryChildren:[]})}loadingTemplate(){return`<div class="text-sm text-gray-500 italic">카테고리 로딩 중...</div>`}selectLimit(e){let t=S(),n=parseInt(e.target.value);this.resetPage(),t(`limit`,n)}selectSort(e){let t=S(),n=e.target.value;this.resetPage(),t(`sort`,n)}search(e){let t=S(),n=document.getElementById(`search-input`);if(n&&e.key===`Enter`){e.preventDefault();let n=e.target.value;t(`search`,n)}}selectCategory(e){let t=S(),{categoryList:n}=v.getState().categories,r=e.target.dataset.category,i=w(n,r),a=i[0]||``,o=i[1]||``;t(`category1`,a),t(`category2`,o),this.resetPage()}resetPage(){v.setState({products:{pagination:{page:d}}})}setEvent(){let e=document.getElementById(`limit-select`),t=document.getElementById(`sort-select`),n=document.getElementById(`search-input`),r=document.querySelectorAll(`.category-filter-btn`);e.addEventListener(`change`,this.selectLimit),t.addEventListener(`change`,this.selectSort),n.addEventListener(`keydown`,this.search),r.forEach(e=>{e.addEventListener(`click`,this.selectCategory)})}cleanup(){let e=document.getElementById(`limit-select`),t=document.getElementById(`sort-select`),n=document.getElementById(`search-input`),r=document.querySelectorAll(`.category-filter-btn`);e.removeEventListener(`change`,this.selectLimit),t.removeEventListener(`change`,this.selectSort),n.removeEventListener(`keydown`,this.search),r.forEach(e=>{e.removeEventListener(`click`,this.selectCategory)})}mounted(){let e=document.getElementById(`category-breadcrumb-container`);if(this.child.get(`categoryBreadcrumb`)){let t=this.child.get(`categoryBreadcrumb`);t.$target=e,t.render()}else{let t=new O(e);this.addChild(t,`categoryBreadcrumb`)}}template(){let{categories:{isCategoryLoading:e,categoryList:t}}=v.getState(),{limit:n,sort:r,search:i}=E(),a=D(),o=T(t,a);return` <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-4">
      <!-- 검색창 -->
      <div class="mb-4">
        <div class="relative">
          <input
            type="text"
            id="search-input"
            placeholder="상품명을 검색해보세요..."
            value="${i}"
            class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg
                          focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg
              class="h-5 w-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <!-- 필터 옵션 -->
      <div class="space-y-3">
        <!-- 카테고리 필터 -->
        <div class="space-y-2">
          <div class="flex items-center gap-2">
            <label class="text-sm text-gray-600">카테고리:</label>
            <div id="category-breadcrumb-container"></div>
          </div>
          <!-- 1depth 카테고리 -->
          <div class="flex flex-wrap gap-2">
            ${e?this.loadingTemplate():o.map(e=>k({category:e})).join(``)||``}
          </div>
          <!-- 2depth 카테고리 -->
        </div>
        <!-- 기존 필터들 -->
        <div class="flex gap-2 items-center justify-between">
          <!-- 페이지당 상품 수 -->
          <div class="flex items-center gap-2">
            <label class="text-sm text-gray-600">개수:</label>
            <select
              id="limit-select"
              class="text-sm border border-gray-300 rounded px-2 py-1 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="10" ${n==10?`selected`:``}>10개</option>
              <option value="20" ${n==20?`selected`:``}>20개</option>
              <option value="50" ${n==50?`selected`:``}>50개</option>
              <option value="100" ${n==100?`selected`:``}>100개</option>
            </select>
          </div>
          <!-- 정렬 -->
          <div class="flex items-center gap-2">
            <label class="text-sm text-gray-600">정렬:</label>
            <select
              id="sort-select"
              class="text-sm border border-gray-300 rounded px-2 py-1
                             focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="price_asc" ${r===`price_asc`?`selected`:``}>
                가격 낮은순
              </option>
              <option value="price_desc" ${r===`price_desc`?`selected`:``}>
                가격 높은순
              </option>
              <option value="name_asc" ${r===`name_asc`?`selected`:``}>이름순</option>
              <option value="name_desc" ${r===`name_desc`?`selected`:``}>이름 역순</option>
            </select>
          </div>
        </div>
      </div>
    </div>`}};function j(e){let t=e;return typeof e==`string`&&(t=Number(e)),t.toLocaleString()}function M(e){let{productId:t,image:n,title:r,lprice:i,brand:a}=e;return`<div
    class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden product-card"
    data-product-id=${t}
  >
    <!-- 상품 이미지 -->
    <div class="aspect-square bg-gray-100 overflow-hidden cursor-pointer product-image">
      <img
        src="${n}"
        alt="${r}"
        class="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
        loading="lazy"
      />
    </div>
    <!-- 상품 정보 -->
    <div class="p-3">
      <div class="cursor-pointer product-info mb-3">
        <h3 class="text-sm font-medium text-gray-900 line-clamp-2 mb-1">${r}</h3>
        <p class="text-xs text-gray-500 mb-2">${a}</p>
        <p class="text-lg font-bold text-gray-900">${j(i)}원</p>
      </div>
      <!-- 장바구니 버튼 -->
      <button
        class="w-full bg-blue-600 text-white text-sm py-2 px-3 rounded-md
                         hover:bg-blue-700 transition-colors add-to-cart-btn"
        data-product-id=${t}
      >
        장바구니 담기
      </button>
    </div>
  </div>`}function N(e=`상품 정보를 불러오는 중...`){return`
  <div class="max-w-md mx-auto px-4 py-4>
    <div class="py-20 bg-gray-50 flex items-center justify-center">
      <div class="text-center">
        <div
          class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"
        ></div>
        <p class="text-gray-600">${e}</p>
      </div>
    </div>
  </div>`}const P=1,F=(e,t)=>{let n,r=0;return function(...i){let a=Date.now();a-r>t?(e.apply(this,i),r=a):(clearTimeout(n),n=setTimeout(()=>{e.apply(this,i),r=Date.now()},t-(a-r)))}};var I=class extends l{setup(){console.log(`setup`),this.prevFilterState=null,this.throttledScrollHandler=F(this.handleInfiniteScroll.bind(this),100),this.restoreScrollPosition=this.restoreScrollPosition.bind(this),this.handleProductClick=this.handleProductClick.bind(this),this.handleQueryParamsChange=this.handleQueryParamsChange.bind(this),this.unsubscribe=v.subscribe(()=>{console.log(`homeState changed`);let{limit:e,sort:t,search:n,category1:r,category2:i}=E(),a=v.getState(),{productListMode:o}=a.products,s={page:a.products.pagination.page,limit:e,search:n,category1:r,category2:i,sort:t};if(o===g.INFINITE_SCROLL){console.log(`무한스크롤 모드: 부분 업데이트만 수행`),this.updateInfiniteScrollUI(),this.prevFilterState=s;return}this.shouldFetchInitialProducts(s)&&this.fetchInitialProducts(),this.render(),this.setEvent(),this.mounted(),this.prevFilterState=s})}handleQueryParamsChange(){console.log(`handleQueryParamsChange`),v.setState({products:{...v.getState().products,pagination:{...v.getState().products.pagination,page:d},productListMode:g.INITIAL}})}setEvent(){console.log(`setEvent`),this.addEventListenersToNewProducts(),window.addEventListener(`queryParamsChange`,this.handleQueryParamsChange),window.addEventListener(`scroll`,this.throttledScrollHandler)}cleanup(){console.log(`cleanup`);let e=document.querySelector(`#infinite-scroll-loading`),t=document.querySelector(`#infinite-scroll-completion`);e&&e.remove(),t&&t.remove(),window.removeEventListener(`queryParamsChange`,this.handleQueryParamsChange),window.removeEventListener(`scroll`,this.throttledScrollHandler),this.unsubscribe&&this.unsubscribe()}shouldFetchInitialProducts(e){if(console.log(`shouldFetchInitialProducts`),!this.prevFilterState)return!0;let{productListMode:t}=v.getState().products;if(t===g.INFINITE_SCROLL)return console.log(`무한스크롤 모드: 초기 상품 로딩 건너뜀`),!1;let n=[`search`,`category1`,`category2`,`sort`,`limit`];return n.some(t=>this.prevFilterState[t]!==e[t])}handleProductClick(e){console.log(`handleProductClick`),e.stopPropagation();let{navigate:t}=C(),n=e.target.closest(`.product-card`);if(n){let e=n.dataset.productId;this.saveScrollPosition(),t(`/product/${e}`)}}saveScrollPosition(){console.log(`saveScrollPosition`);let e={scrollTop:window.scrollY,timestamp:Date.now()};sessionStorage.setItem(`productListScrollPosition`,JSON.stringify(e))}restoreScrollPosition(){console.log(`restoreScrollPosition`);let e=sessionStorage.getItem(`productListScrollPosition`);if(e)try{let{scrollTop:t,timestamp:n}=JSON.parse(e);Date.now()-n<30*60*1e3&&window.scrollTo(0,t),sessionStorage.removeItem(`productListScrollPosition`)}catch(e){console.error(`스크롤 위치 복원 실패:`,e)}}async fetchMoreProducts(){console.log(`fetchMoreProducts`);let e=v.getState(),{isMoreProductsLoading:t,pagination:{page:n}}=e.products,{limit:r,sort:i,search:o,category1:s,category2:c}=E();if(!t)try{v.setState({products:{...e.products,productListMode:g.INFINITE_SCROLL,isMoreProductsLoading:!0}});let t={page:n+1,limit:r,search:o,category1:s,category2:c,sort:i},{products:l,pagination:u}=await a(t);this.appendProductsToDOM(l),v.setState({products:{...v.getState().products,isMoreProductsLoading:!1,list:[...v.getState().products.list,...l],pagination:{...u,page:n+1}}})}catch(e){throw console.error(`상품 추가 로딩 실패:`,e),v.setState({products:{...v.getState().products,isMoreProductsLoading:!1}}),e}}async fetchInitialProducts(){console.log(`fetchInitialProducts`);let e=v.getState(),{isProductsLoading:t}=e.products,{limit:n,sort:r,search:i,category1:o,category2:s}=E();if(t)return;v.setState({products:{...e.products,isProductsLoading:!0}});let c={page:d,limit:n,search:i,category1:o,category2:s,sort:r},{products:l,pagination:u}=await a(c);v.setState({products:{isProductsLoading:!1,list:l,total:u.total,pagination:u}})}async handleInfiniteScroll(){console.log(`handleInfiniteScroll`);let{isProductsLoading:e,isMoreProductsLoading:t,pagination:n}=v.getState().products;if(e||t)return;let r=window.scrollY,i=document.body.scrollHeight,a=window.innerHeight,o=r+a>=i-P;if(o){let{page:e,total:t,limit:r}=n,i=Math.ceil(t/r);if(e>=i)return;try{await this.fetchMoreProducts()}catch(e){console.error(`무한스크롤 로딩 에러:`,e),v.setState({products:{...v.getState().products,isMoreProductsLoading:!1}})}}}updateInfiniteScrollUI(){console.log(`updateInfiniteScrollUI`);let{isMoreProductsLoading:e,pagination:t,total:n}=v.getState().products;console.log(`updateInfiniteScrollUI isMoreProductsLoading:`,e),this.updateLoadingState(e);let{page:r,limit:i}=t,a=Math.ceil(n/i),o=r<a;this.updateCompletionMessage(!o),this.addEventListenersToNewProducts()}updateLoadingState(e){let t=document.querySelector(`#infinite-scroll-loading`);if(e&&!t){let e=document.querySelector(`#products-grid`);if(e&&e.parentNode){let t=document.createElement(`div`);t.id=`infinite-scroll-loading`,t.className=`py-8 flex items-center justify-center`,t.innerHTML=N(`상품을 불러오는 중...`),e.parentNode.insertBefore(t,e.nextSibling)}}else !e&&t&&t.remove()}updateCompletionMessage(e){let t=document.querySelector(`#infinite-scroll-completion`);if(e&&!t){let e=this.$target,t=document.createElement(`div`);t.id=`infinite-scroll-completion`,t.className=`text-center py-4 text-sm text-gray-500`,t.textContent=`모든 상품을 확인했습니다`,e.appendChild(t)}else !e&&t&&t.remove()}addEventListenersToNewProducts(){let e=this.$target.querySelectorAll(`.product-card:not([data-events-added])`);e.forEach(e=>{let t=e.querySelector(`img`);t&&t.addEventListener(`click`,this.handleProductClick);let n=e.querySelector(`.add-to-cart-btn`);n&&n.addEventListener(`click`,e=>{console.log(`addToCartButtonClick`),e.stopPropagation();let t=e.target.dataset.productId,{cart:n,products:r}=v.getState(),i=r.list.find(e=>e.productId===t),a=n.items.some(e=>e.productId===t);a||v.setState({cart:{items:[...n.items,{...i,quantity:1}]}})}),e.setAttribute(`data-events-added`,`true`)})}mounted(){console.log(`mounted`),setTimeout(()=>{this.restoreScrollPosition()},100)}appendProductsToDOM(e){console.log(`appendProductsToDOM`);let t=document.querySelector(`#products-grid`);t&&(e.forEach(e=>{let n=M(e),r=document.createElement(`div`);r.innerHTML=n;let i=r.firstElementChild;i&&t.appendChild(i)}),this.addEventListenersToNewProducts())}loadingTemplate(){return console.log(`loadingTemplate`),` <div class="grid grid-cols-2 gap-4">
      <div
        class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden animate-pulse"
      >
        <div class="aspect-square bg-gray-200"></div>
        <div class="p-3">
          <div class="h-4 bg-gray-200 rounded mb-2"></div>
          <div class="h-3 bg-gray-200 rounded w-2/3 mb-2"></div>
          <div class="h-5 bg-gray-200 rounded w-1/2 mb-3"></div>
          <div class="h-8 bg-gray-200 rounded"></div>
        </div>
      </div>
      <div
        class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden animate-pulse"
      >
        <div class="aspect-square bg-gray-200"></div>
        <div class="p-3">
          <div class="h-4 bg-gray-200 rounded mb-2"></div>
          <div class="h-3 bg-gray-200 rounded w-2/3 mb-2"></div>
          <div class="h-5 bg-gray-200 rounded w-1/2 mb-3"></div>
          <div class="h-8 bg-gray-200 rounded"></div>
        </div>
      </div>
      <div
        class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden animate-pulse"
      >
        <div class="aspect-square bg-gray-200"></div>
        <div class="p-3">
          <div class="h-4 bg-gray-200 rounded mb-2"></div>
          <div class="h-3 bg-gray-200 rounded w-2/3 mb-2"></div>
          <div class="h-5 bg-gray-200 rounded w-1/2 mb-3"></div>
          <div class="h-8 bg-gray-200 rounded"></div>
        </div>
      </div>
      <div
        class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden animate-pulse"
      >
        <div class="aspect-square bg-gray-200"></div>
        <div class="p-3">
          <div class="h-4 bg-gray-200 rounded mb-2"></div>
          <div class="h-3 bg-gray-200 rounded w-2/3 mb-2"></div>
          <div class="h-5 bg-gray-200 rounded w-1/2 mb-3"></div>
          <div class="h-8 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>`}template(){console.log(`template`);let{products:{list:e,total:t,isProductsLoading:n}}=v.getState();return n?this.loadingTemplate():` <div>
      <!-- 상품 개수 정보 -->
      <div class="mb-4 text-sm text-gray-600">
        총 <span class="font-medium text-gray-900">${t}개</span>의 상품
      </div>
      <!-- 상품 그리드 -->
      <div class="grid grid-cols-2 gap-4 mb-6" id="products-grid">
        ${e.map(M).join(``)}
      </div>
    </div>`}};const L={HEADER:`header`,FILTER:`filter`,PRODUCT_LIST:`productList`};var R=class extends l{setup(){this.unsubscribe=v.subscribe(()=>{let e=i.getInstance(),t=e?.getCurrentPath();t===`/`&&(this.render(),this.setEvent(),this.mounted())}),this.fetchCategories()}async fetchCategories(){let e=v.getState(),{isCategoryLoading:t,categoryList:n}=e.categories,r=n&&(Array.isArray(n)?n.length>0:Object.keys(n).length>0);if(r||t)return;v.setState({categories:{...e.categories,isCategoryLoading:!0}});let i=await s();v.setState({categories:{categoryList:i,isCategoryLoading:!1}})}mounted(){let e=document.querySelector(`#filter-container`),t=document.querySelector(`#product-list-container`),n=document.querySelector(`#header-container`);if(this.child.get(L.HEADER)){let e=this.child.get(L.HEADER);e.$target=n,e.render()}else{let e=new y(n);this.addChild(e,L.HEADER)}if(this.child.get(L.FILTER)){let t=this.child.get(L.FILTER);t.$target=e,t.render()}else{let t=new A(e);this.addChild(t,L.FILTER)}if(this.child.get(L.PRODUCT_LIST)){let e=this.child.get(L.PRODUCT_LIST);e.$target=t,e.render()}else{let e=new I(t);this.addChild(e,L.PRODUCT_LIST)}}template(){return`
      <div class="bg-gray-50">
        <div id="header-container"></div>

        <main class="maxProductList-w-md mx-auto px-4 py-4">
          <!-- 검색 및 필터 -->
          <div id="filter-container"></div>

          <!-- 상품 목록 -->
          <div class="mb-6" id="product-list-container"></div>
        </main>
        ${c()}
      </div>
    `}},z=class extends l{setup(){this.unsubscribe=v.subscribe(()=>{this.render(),this.setEvent(),this.mounted()})}template(){let{items:e}=v.getState().cart,t=e.reduce((e,t)=>e+t.quantity,0),n=e.length===0||t===0;return`
      <header class="bg-white shadow-sm sticky top-0 z-40">
        <div class="max-w-md mx-auto px-4 py-4">
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-3">
              <button
                onclick="window.history.back()"
                class="p-2 text-gray-700 hover:text-gray-900 transition-colors"
              >
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 19l-7-7 7-7"
                  ></path>
                </svg>
              </button>
              <h1 class="text-lg font-bold text-gray-900">상품 상세</h1>
            </div>
            <div class="flex items-center space-x-2">
              <!-- 장바구니 아이콘 -->
              <button
                id="cart-icon-btn"
                class="relative p-2 text-gray-700 hover:text-gray-900 transition-colors"
              >
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L6 2H3m4 11v6a1 1 0 001 1h1a1 1 0 001-1v-6M13 13v6a1 1 0 001 1h1a1 1 0 001-1v-6"
                  ></path>
                </svg>
                ${n?``:`<span
                  class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"
                >
                  ${t}
                </span>`}
              </button>
            </div>
          </div>
        </div>
      </header>
    `}};function B(){return`<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>
  </svg>`}function V(){return`<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
  </svg>`}function H(){return`<svg class="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
    <path
      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
    ></path>
  </svg>`}function U(){return`<svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
    <path
      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
    ></path>
  </svg>`}const W={HEADER:`header`};var G=class extends l{setup(){let[e]=b(`id`);this.state={productId:e,product:{},relatedProducts:[],isLoading:!1,isRelatedProductsLoading:!1,quantity:f},this.fetchProduct(),this.fetchRelatedProducts()}async fetchProduct(){if(this.stateisLoading)return;this.setState({isLoading:!0});let e=await o(this.state.productId);this.setState({product:e,isLoading:!1})}async fetchRelatedProducts(){let{category1:e,category2:t}=E();if(this.state.isRelatedProductsLoading)return;this.setState({isRelatedProductsLoading:!0});let n={page:d,limit:u,search:``,category1:e,category2:t},{products:r}=await a(n),i=r.filter(e=>e.productId!==this.state.productId);this.setState({relatedProducts:i,isRelatedProductsLoading:!1})}handleRelatedProductClick(e){e.stopPropagation();let{navigate:t}=C(),n=e.target.closest(`.related-product-card`);if(n){let e=n.dataset.productId;t(`/product/${e}`)}}handleAddToCart=e=>{e.preventDefault(),e.stopPropagation(),console.log(`add to cart`),v.setState({cart:{items:[...v.getState().cart.items,{...this.state.product,quantity:this.state.quantity}]}})};handleClickIncrease(){let e=document.querySelector(`#quantity-input`),t=document.querySelector(`#quantity-increase`);!e||!t||t.addEventListener(`click`,e=>{e.stopPropagation(),this.setState({quantity:Math.min(this.state.quantity+1,this.state.product.stock)})})}handleClickDecrease(){let e=document.querySelector(`#quantity-input`),t=document.querySelector(`#quantity-decrease`);!e||!t||t.addEventListener(`click`,e=>{e.stopPropagation(),this.setState({quantity:Math.max(this.state.quantity-1,f)})})}handleGoToProductList=e=>{e.preventDefault(),e.stopPropagation();let{navigate:t}=C();t(`/`)};setEvent(){this.state.isLoading||this.state.isRelatedProductsLoading||(this.$target.querySelectorAll(`.related-product-card`).forEach(e=>{e.addEventListener(`click`,this.handleRelatedProductClick)}),this.$target.querySelector(`#add-to-cart-btn`).addEventListener(`click`,this.handleAddToCart),this.$target.querySelector(`.go-to-product-list`).addEventListener(`click`,this.handleGoToProductList),this.handleClickIncrease(),this.handleClickDecrease())}cleanup(){this.$target.querySelectorAll(`.related-product-card`).forEach(e=>{e.removeEventListener(`click`,this.handleRelatedProductClick)}),this.$target.querySelector(`#add-to-cart-btn`).removeEventListener(`click`,this.handleAddToCart),this.$target.querySelector(`.go-to-product-list`).removeEventListener(`click`,this.handleGoToProductList)}starTemplate(){let e=Math.floor(this.state.product.rating||0),t=5-e,n=``;for(let t=0;t<e;t++)n+=U();for(let e=0;e<t;e++)n+=H();return`<div class="flex items-center">${n}</div>`}mounted(){if(this.state.isLoading||this.state.isRelatedProductsLoading)return;let e=document.querySelector(`#detail-header-container`);if(this.child.get(W.HEADER)){let t=this.child.get(W.HEADER);t.$target=e,t.render()}else{let t=new z(e);this.addChild(t,W.HEADER)}}relatedProductTemplate(e){let{productId:t,image:n,title:r,lprice:i}=e;return`<div
      class="bg-gray-50 rounded-lg p-3 related-product-card cursor-pointer"
      data-product-id="${t}"
    >
      <div class="aspect-square bg-white rounded-md overflow-hidden mb-2">
        <img src="${n}" alt="${r}" class="w-full h-full object-cover" loading="lazy" />
      </div>
      <h3 class="text-sm font-medium text-gray-900 mb-1 line-clamp-2">${r}</h3>
      <p class="text-sm font-bold text-blue-600">${i}원</p>
    </div>`}template(){let{product:e,relatedProducts:t,isLoading:n,isRelatedProductsLoading:r}=this.state,{productId:i,image:a,title:o,lprice:s,stock:l,description:u,rating:d,reviewCount:f}=e;return n||r?N():`<div class="min-h-screen bg-gray-50">
      <div id="detail-header-container"></div>

      <main class="max-w-md mx-auto px-4 py-4">
        <!-- 브레드크럼 -->

        <!-- 상품 상세 정보 -->
        <div class="bg-white rounded-lg shadow-sm mb-6">
          <!-- 상품 이미지 -->
          <div class="p-4">
            <div class="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
              <img
                src="${a}"
                alt="${o}"
                class="w-full h-full object-cover product-detail-image"
              />
            </div>
            <!-- 상품 정보 -->
            <div>
              <p class="text-sm text-gray-600 mb-1"></p>
              <h1 class="text-xl font-bold text-gray-900 mb-3">${o}</h1>
              <!-- 평점 및 리뷰 -->
              <div class="flex items-center mb-3">
                ${this.starTemplate()}
                <span class="ml-2 text-sm text-gray-600">${d} (${f}개 리뷰)</span>
              </div>
              <!-- 가격 -->
              <div class="mb-4">
                <span class="text-2xl font-bold text-blue-600">${j(s)}원</span>
              </div>
              <!-- 재고 -->
              <div class="text-sm text-gray-600 mb-4">재고 ${l}개</div>
              <!-- 설명 -->
              <div class="text-sm text-gray-700 leading-relaxed mb-6">${u}</div>
            </div>
          </div>
          <!-- 수량 선택 및 액션 -->
          <div class="border-t border-gray-200 p-4">
            <div class="flex items-center justify-between mb-4">
              <span class="text-sm font-medium text-gray-900">수량</span>
              <div class="flex items-center">
                <button
                  id="quantity-decrease"
                  class="w-8 h-8 flex items-center justify-center border border-gray-300 
                     rounded-l-md bg-gray-50 hover:bg-gray-100"
                >
                  ${B()}
                </button>
                <input
                  type="number"
                  id="quantity-input"
                  value="${this.state.quantity}"
                  min="1"
                  max="${l}"
                  class="w-16 h-8 text-center text-sm border-t border-b border-gray-300 
                    focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                />
                <button
                  id="quantity-increase"
                  class="w-8 h-8 flex items-center justify-center border border-gray-300 
                     rounded-r-md bg-gray-50 hover:bg-gray-100"
                >
                  ${V()}
                </button>
              </div>
            </div>
            <!-- 액션 버튼 -->
            <button
              id="add-to-cart-btn"
              data-product-id=${i}
              class="w-full bg-blue-600 text-white py-3 px-4 rounded-md 
                   hover:bg-blue-700 transition-colors font-medium"
            >
              장바구니 담기
            </button>
          </div>
        </div>
        <!-- 상품 목록으로 이동 -->
        <div class="mb-6">
          <button
            class="block w-full text-center bg-gray-100 text-gray-700 py-3 px-4 rounded-md 
              hover:bg-gray-200 transition-colors go-to-product-list"
          >
            상품 목록으로 돌아가기
          </button>
        </div>
        <!-- 관련 상품 -->
        <div class="bg-white rounded-lg shadow-sm">
          <div class="p-4 border-b border-gray-200">
            <h2 class="text-lg font-bold text-gray-900">관련 상품</h2>
            <p class="text-sm text-gray-600">같은 카테고리의 다른 상품들</p>
          </div>
          <div class="p-4">
            <div class="grid grid-cols-2 gap-3 responsive-grid">
              ${t.map(this.relatedProductTemplate).join(``)}
            </div>
          </div>
        </div>
      </main>
      ${c()}
    </div>`}},K=class extends l{setup(){}template(){return` <main class="max-w-md mx-auto px-4 py-4">
      <div class="text-center my-4 py-20 shadow-md p-6 bg-white rounded-lg">
        <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#4285f4;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#1a73e8;stop-opacity:1" />
            </linearGradient>
            <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow
                dx="0"
                dy="2"
                stdDeviation="8"
                flood-color="#000000"
                flood-opacity="0.1"
              />
            </filter>
          </defs>

          <!-- 404 Numbers -->
          <text
            x="160"
            y="85"
            font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
            font-size="48"
            font-weight="600"
            fill="url(#blueGradient)"
            text-anchor="middle"
          >
            404
          </text>

          <!-- Icon decoration -->
          <circle cx="80" cy="60" r="3" fill="#e8f0fe" opacity="0.8" />
          <circle cx="240" cy="60" r="3" fill="#e8f0fe" opacity="0.8" />
          <circle cx="90" cy="45" r="2" fill="#4285f4" opacity="0.5" />
          <circle cx="230" cy="45" r="2" fill="#4285f4" opacity="0.5" />

          <!-- Message -->
          <text
            x="160"
            y="110"
            font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
            font-size="14"
            font-weight="400"
            fill="#5f6368"
            text-anchor="middle"
          >
            페이지를 찾을 수 없습니다
          </text>

          <!-- Subtle bottom accent -->
          <rect
            x="130"
            y="130"
            width="60"
            height="2"
            rx="1"
            fill="url(#blueGradient)"
            opacity="0.3"
          />
        </svg>

        <a
          href="/"
          data-link
          class="inline-block px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >홈으로</a
        >
      </div>
    </main>`}setEvent(){this.$target.addEventListener(`click`,e=>{e.target.matches(`a[data-link]`)&&(e.preventDefault(),window.history.pushState({},``,`/`),window.dispatchEvent(new Event(`popstate`)))})}};const q=[{path:`/`,component:R},{path:`/product/:id`,component:G},{path:`*`,component:K}];function J(){new i(q,document.getElementById(`root`))}const Y=`/front_6th_chapter1-1/`,X=()=>r(async()=>{let{worker:e}=await import(`./browser-Cu7Vv1jQ.js`);return{worker:e}},[]).then(({worker:e})=>e.start({onUnhandledRequest:`bypass`,serviceWorker:{url:`${Y.slice(0,-1)}/mockServiceWorker.js`}}));function Z(){J()}X().then(Z);export{Y as b};