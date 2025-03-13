import { db } from '@/db';
import { user } from '@/db/schema';
import { eq, gt, isNotNull, like } from 'drizzle-orm';

export async function GET() {
  /**
   *
   */
  // const result = await db.select().from(user).where(gt(user.age, 20));
  // const result = await db.select().from(user).where(eq(user.id, 2));
  // const result = await db
  //   .select()
  //   .from(user)
  //   .where(like(user.fullName, '%Rem%'));

  // const result = await db.select().from(user).where(gt(user.age, 22)).limit(3);

  // task 101: Yeu cau truy van user voi profile cua no
  const result = await db.select().from(user).limit(5);

  return new Response(JSON.stringify(result));
}
