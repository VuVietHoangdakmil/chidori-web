import FormMember from "../../components/Form/FormMember";
import { CiMail } from "react-icons/ci";
import { FaRegMessage } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
const list = [
  `Sự tham gia của bạn vào Chương trình Thành viên của Chidori xác nhận sự chấp nhận của bạn về các Điều khoản & Điều kiện sử dụng của chương trình này và bất cứ thay đổi hoặc sửa đổi nào; Do vậy, vui lòng thường xuyên cập nhật các Điều khoản & Điều kiện, các Chính sách áp dụng để có thể hiểu rõ các các thông tin của chương trình Thành viên.`,
  `Chidori có toàn quyền thay đổi, điều chỉnh hoặc loại bỏ bất kỳ Chính sách, Điều khoản, Ưu Đãi tại bất cứ thời điểm nào mà không cần thông báo trước.`,
  `Bất cứ thay đổi hoặc sửa đổi nào sẽ có hiệu lực ngay khi được đăng tải tại trang web chính thức của Chidori.`,
  `Chidori chỉ thu thập và dùng các thông tin cung cấp bởi khách hàng cho mục đích truyền thông tới khách hàng các chương trình ưu đãi, khuyến mãi và các sản phẩm dịch vụ của Chidori. Chidori cam kết không tiết lộ hay chuyển nhượng các thông tin khách hàng.`,
  `Điểm và ưu đãi thành viên chỉ dành cho chủ sở hữu được ghi nhận khi đăng ký trên hệ thống, không được chuyển nhượng dưới mọi hình thức. Chidori có quyền từ chối áp dụng ưu đãi khi chủ tài khoản hội viên không có mặt trực tiếp sử dụng.`,
  `Chidori có quyền đình chỉ tài khoản Thành viên mà không cần thông báo đến bạn nếu Chidori xác định rằng bạn đã vi phạm Điều khoản & Điều kiện Sử dụng này, hoặc việc sử dụng tài khoản của bạn có dấu hiệu gian lận.`,
  `Vui lòng cung cấp thông tin thành viên trước khi thanh toán trực tiếp tại cửa hàng hoặc thanh toán trực tuyến để tích điểm trên mỗi hoá đơn và tận dụng ưu đãi thành viên (nếu có). Chidori có quyền từ chối không thay đổi thông tin hoá đơn sau khi thanh toán đã hoàn thành.`,
  `Ưu đãi giảm giá thành viên, Voucher và E-voucher được trừ trực tiếp vào hóa đơn, không có giá trị quy đổi thành tiền mặt.`,
  `Điểm tích luỹ sẽ không được tính khi thanh toán bằng các hình thức phi tiền mặt như voucher, e-voucher và không áp dụng chung với các chương trình khuyến mãi khác.`,
  `Ưu đãi giảm giá của chương trình thành viên không cộng gộp với các chương trình khuyến mại khác cùng thời điểm.`,
  `Ưu đãi giảm giá chỉ áp dụng cho hoá đơn sử dụng tại cửa hàng, không áp dụng cho hoá đơn giao hàng và hoá đơn mua qua các ứng dụng giao hàng trực tuyến khác.`,
  `Điểm tích luỹ có thể giúp thay đổi hạng mức và giá trị tuỳ theo chính sách của Chidori mà không báo trước.`,
];
const Member = () => {
  return (
    <div className="w-width-primary mx-auto">
      <div className="w-[70%] mx-auto text-text-black-custome">
        <p className="text-[1.6rem]">3 Th01 2023</p>
        <h1 className="text-[3.8rem] font-medium">
          Bạn đã đăng ký thành viên của Chidori chưa?
        </h1>
        <p className="text-[2.8rem] mt-14 font-medium">
          {" "}
          TRỞ THÀNH KHÁCH HÀNG THÂN THIẾT VÀ NHẬN THẬT NHIỀU ƯU ĐÃI TỪ CHIDORI!
        </p>
        <p className="text-[1.8rem] mt-10  text-text-black--custome-min-100">
          Kể từ tháng 4/2020 đến nay, sau khi kích hoạt chương trình khách hàng
          thân thiết, Chidori đã có trên{" "}
          <span className="font-bold">50.000 thành viên</span> tham gia tích lũy
          điểm, trong đó có hơn{" "}
          <span className="font-bold"> 5.000 khách hàng</span> đã trở thành
          Priority và số lượng đó vẫn không ngừng tăng lên mỗi ngày.
        </p>
        <p className="text-[1.8rem] mt-10  text-text-black--custome-min-100">
          Chidori trân quý những người bạn thân thiết đã luôn đồng hành và ủng
          hộ Chidori suốt thời gian qua. Với mong muốn có thể mang đến cho bạn
          những giá trị tốt hơn mỗi ngày. Chidori đã cải tiến chương trình tích
          lũy điểm thành viên để bạn có thể nhận nhiều ưu đãi và quyền lợi đặc
          biệt mỗi khi sử dụng dịch vụ.
        </p>
        <h1 className="text-[2.8rem] mt-14 font-medium">
          1. Cách thức tham gia chương trình
        </h1>
        <p className="text-[1.8rem] mt-10  text-text-black--custome-min-100">
          {" "}
          Chỉ mất 30 giây nhập thông tin để trở thành thành viên của Chidori và
          tận hưởng nhiều ưu đãi đặc quyền.
        </p>
        <p className="text-[1.8rem] mt-10  text-text-black--custome-min-100">
          <span className="font-bold">Bước 1</span> : Đăng ký thành viên theo
          hướng dẫn bên dưới
        </p>
        <p className="text-[1.8rem] mt-10  text-text-black--custome-min-100">
          <span className="font-bold">Bước 2</span> : Bắt đầu tích điểm bằng
          cách đọc số điện thoại trước khi thanh toán tại Chidori
        </p>
        <div className="mt-10">
          <FormMember />
        </div>

        <h1 className="text-[2.8rem] mt-14 font-medium">
          2. Hạng mức và quyền lợi
        </h1>
        <img className="mt-6" src="/img/NewMembership.png" />

        <h1 className="text-[2.8rem] mt-14 font-medium">
          3. Điều Khoản và Điều kiện cam kết:
        </h1>
        <ul className="list-disc pl-20">
          {list.slice(0, 6).map((text, index) => (
            <li
              key={index}
              className="text-[1.8rem] mt-10  text-text-black--custome-min-100"
            >
              {text}
            </li>
          ))}
        </ul>
        <h1 className="text-[2.8rem] mt-14 font-medium">
          4. Chính sách áp dụng:
        </h1>
        <ul className="list-disc pl-20">
          {list.slice(6).map((text, index) => (
            <li
              key={index}
              className="text-[1.8rem] mt-10  text-text-black--custome-min-100"
            >
              {text}
            </li>
          ))}
        </ul>

        <h1 className="text-[2.8rem] mt-14 font-medium">
          5. Ưu đãi sinh nhật:
        </h1>
        <div className="text-[1.8rem] mt-10  text-text-black--custome-min-100">
          Để nhận sử dụng ưu đãi sinh nhật, bạn vui lòng thực hiện các bước sau:
        </div>
        <ul className="list-disc pl-20">
          <li className="text-[1.8rem] mt-10  text-text-black--custome-min-100">
            Thông tin tài khoản được hiển thị trên hoá đơn hoặc nhập thông tin
            vào đường:{" "}
            <a
              className="hover:text-primary-color underline"
              href="https://airtable.com/app9LIHvhKcxQNHkA/shrpHfX6u7gGDYhMp"
            >
              chidori.vn/birthday-member
            </a>
          </li>
          <li className="text-[1.8rem] mt-10  text-text-black--custome-min-100">
            Chidori sẽ liên hệ gửi Birthday Code tương ứng từng hạng thành viên
            đến bạn.
          </li>
          <li className="text-[1.8rem] mt-10  text-text-black--custome-min-100">
            Bạn sử dụng Birthday Code này tại bất kỳ cửa hàng nào của Chidori
            trong tháng sinh nhật. (Mã có giá trị áp dụng từ ngày đầu tiên đến
            ngày cuối của tháng sinh nhật của bạn)
          </li>
        </ul>
        <h1 className="text-[2.8rem] mt-14 font-medium">6. Liên hệ</h1>
        <ul className="list-disc pl-20">
          <li className="text-[1.8rem] mt-10  text-text-black--custome-min-100">
            Thông tin tài khoản được hiển thị trên hoá đơn hoặc nhập thông tin
            vào đường link:
            <a
              className="hover:text-primary-color underline"
              href="https://app.chidori.vn/vi/chidori/customers/bookings/new"
            >
              chidori.vn/booking
            </a>
          </li>
          <li className="text-[1.8rem] mt-10 mb-10  text-text-black--custome-min-100">
            Nếu có thắc mắc liên quan đến chương trình thành viên, bạn có thể
            liên hệ:
          </li>
          <div className="text-[1.8rem] flex items-center my-6">
            <CiMail fontSize="25px" className="mr-5" />
            <a
              className="hover:text-primary-color  underline mr-4"
              href="https://app.chidori.vn/vi/chidori/customers/bookings/new"
            >
              chidori.vn/booking
            </a>
          </div>
          <div className="text-[1.8rem] flex items-center my-6">
            <FaRegMessage fontSize="25px" className="mr-5" />
            <a
              className="hover:text-primary-color mr-4  underline"
              href="https://zalo.me/0986737301?ref=blog.chidori.vn"
            >
              zalo.me/0986737301
            </a>
          </div>
          <div className="text-[1.8rem] flex items-center my-6">
            <FaPhone fontSize="25px" className="mr-5" />
            <a className="hover:text-primary-color mr-4   underline" href="">
              038 3121238
            </a>
          </div>
        </ul>
      </div>
    </div>
  );
};
export default Member;
