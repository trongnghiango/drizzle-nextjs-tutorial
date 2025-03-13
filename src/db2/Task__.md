# Task 25

### 1. Cụm chức năng: Quản lý Khách hàng (Guest Management)

Mục đích: Lưu trữ thông tin khách hàng và liên kết với các đơn đặt phòng.

#### Bảng liên quan: `guest`

#### Chức năng chính:

> tao module `guest` -> tuong ung voi moi chuc nang ta viet service xu ly.

- Đăng ký/Thêm mới khách hàng.

  > vi du func register(payload) voi payload la thong tin khach dang ky.

- Cập nhật thông tin khách (email, SĐT).

  > update profileInfo

- Truy vấn lịch sử đặt phòng của khách.
  > ....

```ts
interface Guest {
  id: serial('id').primaryKey(),
  firstName: varchar('first_name', { length: 200 }).notNull(),
  lastName: varchar('last_name', { length: 200 }).notNull(),
  emailAddress: varchar('email_address', { length: 350 }).unique(),
  phoneNumber: varchar('phone_number', { length: 20 }),
}
```
