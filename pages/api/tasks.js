import { faker } from '@faker-js/faker';

export default function handle(req, res) {
  let tasks = [];

  for (let i = 1; i <= 25; i++) {
    tasks.push({
      id: i,
      assignee: faker.person.fullName(),
      name: faker.lorem.words(),
      labels: [
        "Update pending"
      ],
      status: faker.helpers.arrayElement([
        'open', 'in-progress', 'closed'
      ]),
      created_at: faker.date.anytime(),
      updated_at: faker.date.anytime(),
      due_at: faker.date.future(),
      priority: faker.helpers.arrayElement([
        'urgent', 'low', 'medium'
      ])
    });
  }

  if (req.method == 'GET') {
    res.status(200).json(tasks);
  }
}