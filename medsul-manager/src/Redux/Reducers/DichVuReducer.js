let initialState = {
    mangLoaiDichVu: [
        {
            loaidv_Ma: 'phcn',
            loaidv_Ten: 'Phục Hồi Chức Năng',
        },
        {
            loaidv_Ma: 'ttdd',
            loaidv_Ten: 'Thủ Thuật Điều Dưỡng',
        }
    ],
    mangDichVu: [
        {
            dv_Ma: 'phcn_stb',
            dv_Ten: 'Phục Hồi Chức Năng Sau Tai Biến',
            dv_MoTa: `Tai biến – đột quỵ có thể gặp ở bất kỳ lứa tuổi nào, tỷ lệ cao nhất ở người lớn tuổi nhưng đang có xu hướng trẻ hóa. Hậu quả thường gặp nhất sau tai biến là bệnh nhân mất khả năng vận động, liệt nửa người không tự chăm sóc được bản thân và sinh hoạt khó khăn.
            Tai biến khiến cho máu bị đột ngột ngừng cung cấp lên não, gây tổn thương não, dẫn đến hơn 50% bệnh nhân phải đối mặt với những di chứng hậu tai biến như liệt, suy giảm khả năng vận động, ngôn ngữ, ăn uống rơi vãi… hoặc có thể dẫn đến tử vong.
            Tập phục hồi chức năng tai biến mạch máu não là phương pháp trị liệu hiệu quả để giúp bệnh nhân điều hòa lại trương lực cơ, phục hồi lại các vận động bị yếu hoặc mất do biến chứng hậu tai biến.
            Phục hồi chức năng sau tai biến mạch máu não cần được thực hiện càng sớm càng tốt nhằm giúp bệnh nhân không bị chuyển sang các thể liệt – biến chứng nặng hơn, sớm cải thiện vận động và sinh hoạt bình thường.
            Tuy nhiên sau tai biến các cơ còn yếu, việc di chuyển của bệnh nhận còn gặp rất nhiều khó khăn, vì vậy để đến được các cơ sở phục hồi chức năng tập trung là hết sức khó khăn, nhiều rủi ro và đắt đỏ.
            Phục hồi chức năng sau tai biến – đột quỵ cũng như tìm bác sĩ vật lý trị liệu tại nhà cho căn bệnh này là nhu cầu bức thiết của nhiều gia đình và bệnh nhân song hành với tốc độ gia tăng cũng như mức độ trẻ hoá của căn bệnh này tại Việt Nam.
            Hiểu được điều đó chúng tôi sẽ cử các điều dưỡng viên, chuyên viên PHCN nhiều năm kinh nghiệm đến thực hiện các thủ thuật tại nhà hoặc bất kỳ địa chỉ nào bạn yêu cầu
            PHCN gồm 2 hoạt động
            - Vật lý trị liệu; dùng các thiết bị sóng siêu âm để hỗ trợ phục hồi chức năng.
            - Vận động trị liệu; Dùng các bài tập kỹ thuật để phục hồi các hoạt động trở lại bình thường.
            Nhân viên thực hiện PHCN tại nhà là ai?
            - Kỹ thuật viên phục hồi chức năng có chứng chỉ hành nghề.
            - Cử nhân phục hồi chức năng có chứng chỉ hành nghề.`
        }
    ],
}

const DichVuReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        default: {
            return state;
        }
    }
}
export default DichVuReducer;