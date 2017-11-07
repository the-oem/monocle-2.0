const mockJobs = [
  {
    "id":20,
    "title":"physicist19",
    "description":"Est ut id deserunt. Voluptatem dolor sed tempore beatae. Sapiente molestiae ea itaque cupiditate est nisi earum. Ad dolorum in quae neque. Iure minus illum. Dolore repellat iusto sit earum ad. Qui vitae saepe quo quia necessitatibus. Velit atque voluptatem voluptatibus perspiciatis hic aliquam et. Earum fuga praesentium voluptas veritatis totam. Minus unde deserunt vero accusantium. Harum in aperiam. Asperiores dicta dolor nobis nulla. Veritatis praesentium inventore quia totam. Repellendus laborum placeat. Tenetur exercitationem necessitatibus sint enim aspernatur sed. In quia nemo atque.",
    "url":"http://prohaska.name/guie",
    "location":"39.7392358, -104.990251",
    "posted_date":"2017-11-03",
    "remote":false,
    "company": { "id":218, "name":"Stehr, O'Kon and Cruickshank217" },
    "technologies":[{"id":6,"name":"Clojure"}, {"id":7,"name":"Angular"}, {"id":9,"name":"Python"}]
  },
  {
    "id":26,
    "title":"police officer25",
    "description":"Quia sint neque nobis vel doloribus eligendi ipsum. Tempore et asperiores facere et consequatur. Perferendis sint eos et vel in alias. Rerum suscipit nihil. Molestias voluptatem placeat rerum recusandae. Architecto est quasi deleniti hic. Dolor distinctio saepe eos a et nihil. Sed non cupiditate dolorem consectetur optio sed. Aut maxime et autem. Voluptates quia tempora est aut asperiores. Asperiores et est. Reprehenderit nesciunt ut ullam eius earum beatae. Cum incidunt ratione corporis doloremque hic neque. Saepe eligendi modi eum distinctio harum. Laborum perferendis recusandae. Ex inventore nihil non.",
    "url":"http://pfeffer.info/lauren",
    "location":"33.9519347, -83.357567",
    "posted_date":"2017-11-03",
    "remote":false,
    "company":{ "id":861, "name":"Lakin, Nicolas and Ullrich860" },
    "technologies":[{"id":3,"name":"Go"}, {"id":6,"name":"Clojure"}, {"id":9,"name":"Python"}]
  },
  {
    "id":12,
    "title":"librarian11",
    "description":"Voluptas aut non et quae qui nihil. Libero sapiente rerum. Hic aut corrupti quo dolore ea et. Et iusto voluptas et possimus quis cum ut. Dignissimos quidem id praesentium ipsam assumenda. Amet nihil neque ratione voluptatem. Perspiciatis non quaerat. Deserunt eos natus aut itaque. Id nesciunt ut rerum qui ex. Cum ut aut corrupti quidem. Aut magnam delectus est. Suscipit quos odio aut fugiat temporibus quia velit. Voluptatem nemo perspiciatis. Ut exercitationem officia distinctio consequuntur harum. Fuga itaque in voluptates.",
    "url":"http://schaden.name/olga_kemmer",
    "location":"42.5803122, -83.0302033",
    "posted_date":"2017-11-03",
    "remote":false,
    "company":{ "id":647,"name":"Rice, Stracke and Deckow646" },
    "technologies":[{"id":1,"name":"Ruby"}, {"id":3,"name":"Go"}, {"id":9,"name":"Python"}]
  },
  {
    "id":15,
    "title":"judge14",
    "description":"Nemo voluptas mollitia. Eos aut quo quod. Excepturi est est cupiditate voluptatem architecto a. Quia molestiae quibusdam. Ut culpa ut ab consequuntur quaerat. Et voluptatem commodi deserunt et fugit quas. Sapiente alias non voluptas aut magni ut. Sunt et eum molestias cum quam. Quis incidunt consectetur. Dignissimos tenetur corporis illum voluptatem quibusdam distinctio. Dolor voluptatem dolores id veritatis ullam. Recusandae fugiat deleniti. Et velit commodi sunt. Incidunt consequatur quaerat sint nesciunt dolor. Voluptatem perferendis eos impedit. Minus blanditiis corporis quisquam sint. Pariatur voluptas minus dolorem dolore id.",
    "url":"http://muller.org/esmeralda",
    "location":"33.7455731, -117.8678338",
    "posted_date":"2017-11-03",
    "remote":true,
    "company":{ "id":949,"name":"Moore Group948" },
    "technologies":[{"id":6,"name":"Clojure"}, {"id":8,"name":"Rails"}, {"id":9,"name":"Python"}]
  },
  {
    "id":30,
    "title":"human resources29",
    "description":"Quos veritatis nam. Modi earum dolores at veniam. Ad et veniam. Error rerum qui nihil eos. Quia quam saepe quasi eaque. Sed natus qui. Doloremque voluptatem et mollitia. Ut qui voluptatem eaque non aspernatur. Praesentium quibusdam minima laboriosam error nesciunt repudiandae temporibus. Quis sit et aut quos voluptates distinctio. Exercitationem commodi et quaerat sunt et. Corporis inventore necessitatibus. Tempora repellendus voluptas adipisci quos qui voluptatem. Aperiam expedita ipsa dolor temporibus amet. Beatae temporibus exercitationem pariatur voluptate repellat.",
    "url":"http://macejkovicschneider.com/kaitlyn_white",
    "location":"33.0198431, -96.6988856",
    "posted_date":"2017-11-03",
    "remote":false,
    "company":{ "id":810,"name":"Simonis-Cronin809" },
    "technologies":[{"id":2,"name":"JavaScript"}, {"id":3,"name":"Go"}, {"id":4,"name":"React"}]
  },
  {
    "id":27,
    "title":"judge26",
    "description":"Illum nesciunt sunt omnis non et error. Cum hic dicta laboriosam eveniet natus. Assumenda beatae molestias sit sit tenetur et. Sit doloribus est sunt non minima laudantium qui. Totam sunt repudiandae at ipsa. A ipsam omnis iste dolorem. At soluta maxime aut error. Quidem illum quis esse praesentium et. Quia officia est id quis doloribus. Odit minus dolorem. Laudantium labore cupiditate qui nesciunt. Rerum pariatur nemo laborum animi. Et et voluptatem nihil nostrum nulla ipsa. Quia fugiat iusto fuga. A quaerat non eos neque. Repellendus et fuga rerum magnam quis. Vel ea quia iure cumque dolores et.",
    "url":"http://kozey.io/carmella.oconnell",
    "location":"33.7489954, -84.3879824",
    "posted_date":"2017-11-03",
    "remote":true,
    "company":{ "id":856,"name":"Rutherford-Kuhn855" },
    "technologies":[{"id":2,"name":"JavaScript"}, {"id":3,"name":"Go"}, {"id":4,"name":"React"}]
  }
]
