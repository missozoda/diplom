(function () {
  var Memory = {
    init: function (cards, cards1) {
      this.$game = $(".game");
      this.$modal = $(".modal");
      this.$overlay = $(".modal-overlay");
      this.$restartButton = $("button.restart");
      this.cardsArray = $.merge(cards, cards1);
      this.shuffleCards(this.cardsArray);
      this.setup();
    },
    shuffleCards: function (cardsArray) {
      this.$cards = $(this.shuffle(this.cardsArray));
    },
    setup: function () {
      this.html = this.buildHTML();
      this.$game.html(this.html);
      this.$memoryCards = $(".card");
      this.paused = false;
      this.guess = null;
      this.binding();
    },
    binding: function () {
      this.$memoryCards.on("click", this.cardClicked);
      this.$restartButton.on("click", $.proxy(this.reset, this));
    },
    cardClicked: function () {
      var _ = Memory;
      var $card = $(this);
      if (
        !_.paused &&
        !$card.find(".inside").hasClass("matched") &&
        !$card.find(".inside").hasClass("picked")
      ) {
        $card.find(".inside").addClass("picked");
        if (!_.guess) {
          _.guess = $(this).attr("data-id");
        } else if (
          _.guess == $(this).attr("data-id") &&
          !$(this).hasClass("picked")
        ) {
          $(".picked").addClass("matched");
          _.guess = null;
        } else {
          _.guess = null;
          _.paused = true;
          setTimeout(function () {
            $(".picked").removeClass("picked");
            Memory.paused = false;
          }, 600);
        }
        if ($(".matched").length == $(".card").length) {
          _.win();
        }
      }
    },
    win: function () {
      this.paused = true;
      setTimeout(function () {
        Memory.showModal();
        Memory.$game.fadeOut();
      }, 1000);
    },
    showModal: function () {
      this.$overlay.show();
      this.$modal.fadeIn("slow");
    },
    hideModal: function () {
      this.$overlay.hide();
      this.$modal.hide();
    },
    reset: function () {
      this.hideModal();
      this.shuffleCards(this.cardsArray);
      this.setup();
      this.$game.show("slow");
    },
    shuffle: function (array) {
      var counter = array.length,
        temp,
        index;
      while (counter > 0) {
        index = Math.floor(Math.random() * counter);
        counter--;
        temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
      }
      return array;
    },
    buildHTML: function () {
      var frag = "";
      this.$cards.each(function (k, v) {
        frag +=
          '<div class="card" data-id="' +
          v.id +
          '"><div class="inside">\
				<div class="front"><img src="' +
          v.img +
          '"\
				alt="' +
          v.name +
          '" /></div>\
				<div class="back"><img src="https://images.unsplash.com/photo-1576836165612-8bc9b07e7778?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80"\
				alt="Codepen" /></div></div>\
				</div>';
      });
      return frag;
    },
  };
  var cards = [
    {
      name: "tovuq",
      img: "img/tovuq.jpg",
      id: 1,
    },

    // {
    // 	// название
    // 	name: "tuxum",
    // 	// адрес картинки
    // 	img: "img/tuxum.jpg",
    // 	// порядковый номер пары
    // 	id: 1,
    // },

    {
      name: "ordak",
      img: "img/ordak.jpg",
      id: 2,
    },
    {
      name: "bedana",
      img: "img/bedana.jpg",
      id: 3,
    },
    {
      name: "tuyaqush",
      img: "img/tuyaqush.jpg",
      id: 4,
    },
    {
      name: "kabutar",
      img: "img/kabutar.jpg",
      id: 5,
    },
    {
      name: "kurka",
      img: "img/kurka.jpg",
      id: 6,
    },
    {
      name: "burgut",
      img: "img/burgut.jpg",
      id: 7,
    },
    {
      name: "chumchuq",
      img: "img/chumchuq.jpg",
      id: 8,
    },
    // {
    // 	name: "oqqush",
    // 	img: "img/oqqush.jpg",
    // 	id: 9
    // },
    // {
    // 	name: "turna",
    // 	img: "img/turna.jpg",
    // 	id: 10
    // },
    // {
    // 	name: "pingving",
    // 	img: "img/pingving.jpg",
    // 	id: 11
    // },
    // {
    // 	name: "boyugli",
    // 	img: "img/boyugli.jpg",
    // 	id: 12
    // },
  ];

  var cards1 = [
    // {
    // 	// название
    // 	name: "tovuq",
    // 	// адрес картинки
    // 	img: "img/tovuq.jpg",
    // 	// порядковый номер пары
    // 	id: 1,
    // },

    {
      name: "tovuq",
      img: "img/tuxum.jpg",
      id: 1,
    },

    {
      name: "ordak1",
      img: "img/ordak1.jpg",
      id: 2,
    },
    {
      name: "bedanat",
      img: "img/bedanat.jpg",
      id: 3,
    },
    {
      name: "tuyaqusht",
      img: "img/tuyaqusht.jpg",
      id: 4,
    },
    {
      name: "kabutart",
      img: "img/kabutart.jpg",
      id: 5,
    },
    {
      name: "kurkat",
      img: "img/kurkat.jpg",
      id: 6,
    },
    {
      name: "burgutt",
      img: "img/burgutt.jpg",
      id: 7,
    },
    {
      name: "chumchuqt",
      img: "img/chumchuqt.jpg",
      id: 8,
    },
    // {
    // 	name: "oqqusht",
    // 	img: "img/oqqusht.jpg",
    // 	id: 9
    // },
    // {
    // 	name: "turnat",
    // 	img: "img/turnat.jpg",
    // 	id: 10
    // },
    // {
    // 	name: "pingvingt",
    // 	img: "img/pingvingt.jpg",
    // 	id: 11
    // },
    // {
    // 	name: "boyuglit",
    // 	img: "img/boyuglit.jpg",
    // 	id: 12
    // },
  ];
  Memory.init(cards, cards1);
})();
