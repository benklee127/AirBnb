"use strict";

let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    options.tableName = "SpotImages";
    return queryInterface.bulkInsert(
      options,
      [
        {
          spotId: 1,
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-46695796/original/38bc8081-9415-453a-b8bf-9f4aeb146819.jpeg",
          preview: true,
        },
        {
          spotId: 1,
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-46695796/original/9bd67185-dc83-4473-a191-9486c62aec66.jpeg",
          preview: true,
        },
        {
          spotId: 1,
          url: "https://a0.muscache.com/im/pictures/9988b302-b51a-4765-ac74-da9dad0e326a.jpg",
          preview: true,
        },
        {
          spotId: 1,
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-46695796/original/d01dc3d2-9597-4d88-92f7-3e15a1c0d604.jpeg",
          preview: true,
        },
        {
          spotId: 1,
          url: "https://a0.muscache.com/im/pictures/f58c28d5-52d5-4c58-928e-ef00bf7164a3.jpg",
          preview: true,
        },
        {
          spotId: 2,
          url: "https://a0.muscache.com/im/pictures/4f70b681-a792-4530-8c52-f2a8d262942d.jpg",
          preview: true,
        },
        {
          spotId: 2,
          url: "https://a0.muscache.com/im/pictures/e15ee353-0861-44ed-868a-56091755e513.jpg",
          preview: true,
        },
        {
          spotId: 2,
          url: "https://a0.muscache.com/im/pictures/45a3aa2b-ce00-4068-9ebe-9f83ca281fe4.jpg",
          preview: true,
        },
        {
          spotId: 2,
          url: "https://a0.muscache.com/im/pictures/4746f065-e12c-4af8-8e2a-0f295b4b1d8a.jpg",
          preview: true,
        },
        {
          spotId: 2,
          url: "https://a0.muscache.com/im/pictures/0c37c239-fe53-4ae5-9e70-34d3988342da.jpg",
          preview: true,
        },
        {
          spotId: 3,
          url: "https://a0.muscache.com/im/pictures/71117b76-cd16-4701-9646-e637944d3a4b.jpg",
          preview: true,
        },
        {
          spotId: 3,
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-432044/original/f2d20695-680c-4637-b72c-80238c0dd384.jpeg",
          preview: true,
        },
        {
          spotId: 3,
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-432044/original/697ff0dd-c155-444f-808c-5b431d47b8e9.jpeg",
          preview: true,
        },
        {
          spotId: 3,
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-432044/original/47b67284-96d8-46bc-bea0-50e56e8447aa.jpeg",
          preview: true,
        },
        {
          spotId: 3,
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-432044/original/fd0ac1ca-7b2b-4a3a-8765-2f30efb0d343.jpeg",
          preview: true,
        },
        {
          spotId: 4,
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-45465864/original/3d966c94-4c87-479b-8eeb-4889e9fb6ac9.jpeg",
          preview: true,
        },
        {
          spotId: 4,
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-45465864/original/eeffdea4-bbcf-4a05-bcb9-579a03bf41ab.jpeg",
          preview: true,
        },
        {
          spotId: 4,
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-45465864/original/9d4c4d58-b9e6-4a2d-9883-eb2df68c0ba0.jpeg",
          preview: true,
        },
        {
          spotId: 4,
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-45465864/original/3c44f9fd-0a88-41dd-acb5-ebf58bde739f.jpeg",
          preview: true,
        },
        {
          spotId: 4,
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-45465864/original/39cdf5aa-a5d6-4f55-893c-73bf310dd598.jpeg",
          preview: true,
        },
        {
          spotId: 5,
          url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-46761225/original/11058c0d-fac8-4035-8f16-8b3abe7441cd.jpeg",
          preview: true,
        },
        {
          spotId: 5,
          url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-46761225/original/08ca9cc1-6c85-4663-9faa-114e1c00956e.jpeg",
          preview: true,
        },
        {
          spotId: 5,
          url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-46761225/original/797d317f-a624-40eb-99de-2f3219176317.jpeg",
          preview: true,
        },
        {
          spotId: 5,
          url: "https://a0.muscache.com/im/pictures/5564847a-c678-4e39-8de1-2f591d017657.jpg",
          preview: true,
        },
        {
          spotId: 5,
          url: "https://a0.muscache.com/im/pictures/bc711448-6fe6-4a43-a08d-7e8b30d9dda3.jpg",
          preview: true,
        },
        {
          spotId: 6,
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-52086975/original/017465f1-e5b3-43ff-8d92-facd828f8fc2.jpeg",
          preview: true,
        },
        {
          spotId: 6,
          url: "https://a0.muscache.com/im/pictures/65338c9e-1127-42b9-8660-fd84c00ae427.jpg",
          preview: true,
        },
        {
          spotId: 6,
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-52086975/original/8d608345-ebc4-458a-b934-a6426e4e6d14.jpeg",
          preview: true,
        },
        {
          spotId: 6,
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-52086975/original/7e0a09ff-67e9-4f42-9c1d-00b6264cde1d.jpeg",
          preview: true,
        },
        {
          spotId: 6,
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-52086975/original/77cb0027-010d-41d2-9702-2cc9d90a6407.jpeg",
          preview: true,
        },
        {
          spotId: 7,
          url: "https://a0.muscache.com/im/pictures/83738e60-4654-4faa-af1a-f53d02acbe6c.jpg",
          preview: true,
        },
        {
          spotId: 7,
          url: "https://a0.muscache.com/im/pictures/69faa681-fb85-4817-86f6-9d727c3fe9d2.jpg",
          preview: true,
        },
        {
          spotId: 7,
          url: "https://a0.muscache.com/im/pictures/1518b389-42b8-4cf2-8dbb-25f8323907c8.jpg",
          preview: true,
        },
        {
          spotId: 7,
          url: "https://a0.muscache.com/im/pictures/b6012e4d-3856-4af8-8bdb-9be6cd19d7db.jpg",
          preview: true,
        },
        {
          spotId: 7,
          url: "https://a0.muscache.com/im/pictures/b73ffa9d-5af1-4ccc-b84b-2ff76926aaef.jpg",
          preview: true,
        },
        {
          spotId: 8,
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-47771464/original/e8f6758f-1348-43f6-832a-066a90523068.jpeg",
          preview: true,
        },
        {
          spotId: 8,
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-47771464/original/b81502ba-6387-402b-ad2c-da03434251c6.jpeg",
          preview: true,
        },
        {
          spotId: 8,
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-47771464/original/bc695cf2-4ffd-4abb-9553-2188600916e8.jpeg",
          preview: true,
        },
        {
          spotId: 8,
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-47771464/original/e93674c1-f724-4c5a-8ed3-51511db94daa.jpeg",
          preview: true,
        },
        {
          spotId: 8,
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-47771464/original/a455c250-36da-4ac7-b18c-f7f47ff893d9.jpeg",
          preview: true,
        },
        {
          spotId: 9,
          url: "https://a0.muscache.com/im/pictures/13ee20e4-8255-4e9b-9252-cf5146fc4599.jpg",
          preview: true,
        },
        {
          spotId: 9,
          url: "https://a0.muscache.com/im/pictures/29a0069a-28d9-4fa9-914c-0cffa6bca754.jpg",
          preview: true,
        },
        {
          spotId: 9,
          url: "https://a0.muscache.com/im/pictures/0a6ed1ce-83ba-4ab2-bf94-70e911373ab8.jpg",
          preview: true,
        },
        {
          spotId: 9,
          url: "https://a0.muscache.com/im/pictures/6c49f73e-284c-4e69-8012-9870e122f086.jpg",
          preview: true,
        },
        {
          spotId: 9,
          url: "https://a0.muscache.com/im/pictures/aa766fff-6122-4367-be1a-5025bd1c2a10.jpg",
          preview: true,
        },
        {
          spotId: 10,
          url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-52254969/original/63a326b2-df8c-4f38-bca0-8d37d6dfc70e.jpeg?im_w=720",
          preview: true,
        },
        {
          spotId: 10,
          url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-52254969/original/c05e0cff-3eb8-43a7-babe-8bdf4ee645e5.jpeg?im_w=720",
          preview: true,
        },
        {
          spotId: 10,
          url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-52254969/original/e4ef56be-d708-4e65-9e2d-7d1240ad0918.jpeg?im_w=720",
          preview: true,
        },
        {
          spotId: 10,
          url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-52254969/original/15f9f803-8897-4aa8-bbd2-f49fa40d050b.jpeg?im_w=720",
          preview: true,
        },
        {
          spotId: 10,
          url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-52254969/original/035cea1e-b23f-4848-b61f-1dc1c81e4e9e.jpeg?im_w=720",
          preview: true,
        },
        {
          spotId: 11,
          url: "https://a0.muscache.com/im/pictures/dc66847a-9db9-493c-9270-b49c93433c21.jpg?im_w=720",
          preview: true,
        },
        {
          spotId: 11,
          url: "https://a0.muscache.com/im/pictures/88fc2db4-8625-4695-8906-f8d1334e06f7.jpg?im_w=720",
          preview: true,
        },
        {
          spotId: 11,
          url: "https://a0.muscache.com/im/pictures/50f6291a-5839-4c5b-a2cd-57c5fdc3aa72.jpg?im_w=720",
          preview: true,
        },
        {
          spotId: 11,
          url: "https://a0.muscache.com/im/pictures/77ca058b-6cba-4bac-ba2c-9528aafb1591.jpg?im_w=720",
          preview: true,
        },
        {
          spotId: 11,
          url: "https://a0.muscache.com/im/pictures/da34cb78-2081-45c3-ab89-963ef7a9e742.jpg?im_w=720",
          preview: true,
        },
        {
          spotId: 12,
          url: "https://a0.muscache.com/im/pictures/181d4be2-6cb2-4306-94bf-89aa45c5de66.jpg?im_w=720",
          preview: true,
        },
        {
          spotId: 12,
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-39908051/original/daac00ba-94c7-4097-b485-e4c6424d495f.jpeg?im_w=720",
          preview: true,
        },
        {
          spotId: 12,
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-39908051/original/1a126a4c-287a-41d1-bba7-15c12484bf0f.jpeg?im_w=720",
          preview: true,
        },
        {
          spotId: 12,
          url: "https://a0.muscache.com/im/pictures/09407078-8914-4920-801e-df7e096c0782.jpg?im_w=720",
          preview: true,
        },
        {
          spotId: 12,
          url: "https://a0.muscache.com/im/pictures/e7e1f6b2-fe37-47e3-88ae-63407649d027.jpg?im_w=720",
          preview: true,
        },
        {
          spotId: 13,
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-777056387166759357/original/62d5cd2e-6728-4794-8314-e664fc2ec3d1.jpeg?im_w=720",
          preview: true,
        },
        {
          spotId: 13,
          url: "https://a0.muscache.com/im/pictures/66822c39-124d-46ed-a5c7-0a71bbe46771.jpg?im_w=720",
          preview: true,
        },
        {
          spotId: 13,
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-777056387166759357/original/43cc2e3b-bf76-4228-94e4-a77b913ba396.jpeg?im_w=720",
          preview: true,
        },
        {
          spotId: 13,
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-777056387166759357/original/614fd055-077c-4a45-b586-5bfd27bd943e.jpeg?im_w=720",
          preview: true,
        },
        {
          spotId: 13,
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-777056387166759357/original/37d52c25-5045-4861-b831-dc4611967535.jpeg?im_w=720",
          preview: true,
        },
        {
          spotId: 14,
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-705626260397182020/original/aff3bba5-e894-49d8-81c3-ef1d5c6cffb5.jpeg?im_w=720",
          preview: true,
        },
        {
          spotId: 14,
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-705626260397182020/original/f73d4dc6-65af-4b68-b212-9ce5a8dec785.jpeg?im_w=720",
          preview: true,
        },
        {
          spotId: 14,
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-705626260397182020/original/9e880873-3257-4a23-8994-984be6bf2802.jpeg?im_w=720",
          preview: true,
        },
        {
          spotId: 14,
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-705626260397182020/original/a84a41db-aa78-4e74-aa52-c82e1ce6a1bb.jpeg?im_w=720",
          preview: true,
        },
        {
          spotId: 14,
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-705626260397182020/original/0b89d8c0-ad81-4329-b18c-57976fe3f1b2.jpeg?im_w=720",
          preview: true,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    options.tableName = "SpotImages";
    return queryInterface.bulkDelete(options);
  },
};
