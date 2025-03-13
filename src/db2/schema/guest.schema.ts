import { pgTable, serial, varchar } from 'drizzle-orm/pg-core';

export const guests = pgTable('guest', {
  id: serial('id').primaryKey(),
  firstName: varchar('first_name', { length: 200 }).notNull(),
  lastName: varchar('last_name', { length: 200 }).notNull(),
  emailAddress: varchar('email_address', { length: 350 }).unique(),
  phoneNumber: varchar('phone_number', { length: 20 }),
});
