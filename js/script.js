$(function () {
	var rootSrc = "img/";
	var model = {
		currentCat: null,
		cats: [
			{
				name: "Minina",
				pic: "img/cats-q-c-640-480-1.jpg",
				clicks: 0
			},
			{
				name: "Minino",
				pic: "img/cats-q-c-640-480-2.jpg",
				clicks: 0
			},
			{
				name: "Tom",
				pic: "img/cats-q-c-640-480-5.jpg",
				clicks: 0
			},
			{
				name: "Felix",
				pic: "img/cats-q-c-640-480-8.jpg",
				clicks: 0
			},
			{
				name: "Gato",
				pic: "img/cats-q-c-640-480-9.jpg",
				clicks: 0
			}
		]
	};

	var controller = {
		init: function() {
			viewList.init();
			viewCat.init();
		},
		getCats: function() {
			return model.cats;
		},
		getCurrentCat: function() {
			return !model.currentCat ? model.cats[0] : model.currentCat;
		},
		setCurrentCat: function(cat){
			model.currentCat = cat;
			viewCat.render();
		},
		counterClicker: function(cat){
			//
		}
	}

	var viewList = {
		init: function () {
			this.catList = document.getElementById("cats-list");
			viewList.render();
		},
		render: function() {
			controller.getCats().forEach(function(el) {
				var litem = document.createElement('li');
				var litxt = document.createTextNode(el.name);
				litem.addEventListener('click', function() {
					controller.setCurrentCat(el);
				});
				litem.appendChild(litxt);
				this.catList.appendChild(litem);
			}, this);
		}

	}

	var viewCat = {
		init: function() {
			this.catDetails = document.getElementById("cat-details");
			this.catDetailsTitle = document.getElementById("cat-details-title");
			this.catDetailsPic = document.getElementById("cat-details-pic");
			this.catDetailsClicks = document.getElementById("cat-details-clicks");
			viewCat.render();
		},
		render: function() {
			var cat = controller.getCurrentCat();
			this.catDetailsTitle.innerHTML = cat.name;
			this.catDetailsPic.setAttribute('src',cat.pic);
			this.catDetailsPic.addEventListener('click', function() {

			})
			this.catDetailsClicks.innerHTML = cat.clicks;
		}
	}

	controller.init();
})