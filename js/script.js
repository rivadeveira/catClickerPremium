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
			model.currentCat = model.cats[0];
			viewList.init();
			viewCat.init();
		},
		getCats: function() {
			return model.cats;
		},
		getCurrentCat: function() {
			return model.currentCat;
		},
		setCurrentCat: function(cat){
			model.currentCat = cat;
			//viewCat.render();
		},
		counterClicker: function(){
			//console.log(model);
			model.currentCat.clicks++;
			//viewList.render();
			viewCat.render();
		}
	}

	var viewList = {
		init: function () {
			this.catList = document.getElementById("cats-list");
			this.render();
		},
		render: function() {
			//this.catList.innerHTML = "";
			controller.getCats().forEach(function(el) {
				var litem = document.createElement('li');
				var litxt = document.createTextNode(el.name);
				litem.addEventListener('click', function() {
					controller.setCurrentCat(el);
					viewCat.render();
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
			this.catDetailsPic.addEventListener('click', function() {
				controller.counterClicker();
			})
			this.render();
		},
		render: function() {
			//controller.getCurrentCat()
			var cat = controller.getCurrentCat();
			this.catDetailsTitle.innerHTML = cat.name;
			this.catDetailsPic.setAttribute('src',cat.pic);
			this.catDetailsClicks.innerHTML = cat.clicks;
		}
	}

	controller.init();
})