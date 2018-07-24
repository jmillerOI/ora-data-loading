import {Factory, faker} from 'ember-cli-mirage';

export default Factory.extend({
  url: 'http://via.placeholder.com/640x480',
  title: faker.lorem.word,
  description: faker.lorem.paragraph,
  createdAt: faker.date.past,

  afterCreate(photo, server) {
    let user = server.create('user');
    photo.update({user});
  }
});
