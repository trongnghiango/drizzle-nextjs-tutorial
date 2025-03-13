import { integer, pgTable, serial, varchar } from 'drizzle-orm/pg-core';
import { user } from './user';

export const profile = pgTable('profile', {
  id: serial('id').primaryKey(),
  name: varchar('bio', { length: 256 }),
  userId: integer('user_id').references(() => user.id),
});
