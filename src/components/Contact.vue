<template>
  <div
    class="bg-gradient-to-r from-green-island-200 to-green-island-100 p-5 md:p-0"
  >
    <div
      class="bg-white rounded-3xl md:rounded-none grid grid-cols-1 md:grid-cols-2 min-h-screen"
      :style="{
        backgroundImage: 'url(' + require('@/assets/images/bg_form.png') + ')',
      }"
    >
      <div class="place-self-center w-full">
        <div class="m-5 md:mx-10 lg:mx-32">
          <img
            class="mb-4"
            style="width: 200px"
            :src="require('@/assets/images/logo_bizup.png')"
            alt=""
          />

          <div class="text-main mb-2">Register</div>
          <div class="text-base mb-10 text-justify">
            ไฟลท์แรงใจแผดเผาเอ๋แซ็กโซโฟน พาสต้าจตุคามเกย์
            ครัวซองต์ปิกอัพซ้อลีเมอร์เฟรชชี่ พล็อตรากหญ้าคอนเซปต์คอนโด โอเลี้ยง
            ลาตินสต๊อคเตี๊ยมแรลลีแซลมอน ทัวร์โปรเจกต์คาเฟ่ สวีทคอนแทคอัลมอนด์
            คอนเซ็ปต์บร็อกโคลีไงเดชานุภาพไฮเอนด์เจ๊แอนด์
            เซ็กซี่โฟนรีไซเคิลสมาพันธ์ ดีไซน์เนอร์โรแมนติค
          </div>
          <div class="">
            <form @submit="submitForm">
              <div class="form-group">
                <label class="text-label" for="txt_name_comp">ชื่อบริษัท</label>
                <InputText
                  class="w-full"
                  id="txt_name_comp"
                  placeholder="Name Company"
                  type="text"
                  v-model="fromContact.businessName"
                />
              </div>
              <div class="form-group">
                <label class="text-label" for="txt_name_user"
                  >ชื่อผู้ติดต่อ <span class="text-red-500">*</span></label
                >
                <InputText
                  class="w-full"
                  id="txt_name_user"
                  placeholder="ชื่อผู้ติดต่อ"
                  type="text"
                  v-model="fromContact.fullName"
                  required
                />
              </div>
              <div class="flex flex-col md:flex-row gap-4">
                <div class="flex-1 relative">
                  <div class="form-group">
                    <label class="text-label" for="txt_email">อีเมล</label>
                    <InputText
                      class="w-full"
                      :class="{ 'p-invalid': msg.email }"
                      id="txt_email"
                      placeholder="อีเมล"
                      type="text"
                      v-model="fromContact.email"
                      @blur="validateEmail"
                    />
                  </div>
                  <small class="absolute bottom-3 text-red-500">{{
                    msg.email
                  }}</small>
                </div>
                <div class="flex-1 form-group">
                  <label class="text-label" for="txt_tel"
                    >เบอร์โทร <span class="text-red-500">*</span></label
                  >
                  <InputMask
                    class="w-full"
                    id="txt_tel"
                    placeholder="เบอร์โทร"
                    v-model="fromContact.tel"
                    mask="999-999-9999"
                    required
                  />
                </div>
              </div>
              <div class="flex flex-col md:flex-row gap-4">
                <div class="flex-1 form-group">
                  <label class="text-label" for="txt_date"
                    >วันที่สะดวกให้ติดต่อกลับ</label
                  >
                  <Calendar
                    class="w-full"
                    placeholder="วันที่สะดวกให้ติดต่อกลับ"
                    id="txt_date"
                    v-model="fromContact.dateContact"
                  />
                </div>
                <div class="flex-1 form-group">
                  <label class="text-label" for="txt_date_range"
                    >ช่วงเวลาที่สะดวก</label
                  >
                  <Calendar
                    class="w-full"
                    placeholder="ช่วงเวลาที่สะดวก"
                    id="txt_date_range"
                    v-model="fromContact.timeContact"
                    :timeOnly="true"
                    hourFormat="24"
                  />
                </div>
              </div>
              <div class="mt-20 flex justify-center">
                <button type="submit" class="btn-submit">
                  ส่งข้อมูลติดต่อ
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div
        class="hidden md:flex h-full col-span-1 items-center justify-center bg-gradient-to-r from-green-island-200 to-green-island-100"
      >
        <div class="mx-5 md:mx-10 lg:mx-32 relative">
          <Galleria
            v-model:activeIndex="activeIndex"
            :value="images"
            :responsiveOptions="responsiveOptions"
            :numVisible="5"
            :circular="true"
            containerStyle="max-width: 640px"
            :showThumbnails="false"
            :showItemNavigatorsOnHover="true"
            :showIndicators="true"
            :autoPlay="true"
            :transitionInterval="5000"
          >
            <template #item="slotProps">
              <div class="flex flex-col mb-20">
                <img
                  class="mb-4"
                  :src="slotProps.item"
                  style="width: 100%; display: block"
                />
                <div class="text-white text-4xl text-center mb-2">Register</div>
                <div class="text-white text-center">
                  ไฟลท์แรงใจแผดเผาเอ๋แซ็กโซโฟน พาสต้าจตุคามเกย์
                  ครัวซองต์ปิกอัพซ้อลีเมอร์เฟรชชี่ พล็อตรากหญ้าคอนเซปต์คอนโด
                  โอเลี้ยง ลาตินสต๊อคเตี๊ยมแรลลีแซลมอน ทัวร์โปรเจกต์คาเฟ่
                  สวีทคอนแทคอัลมอนด์
                </div>
              </div>
            </template>
            <template #thumbnail="slotProps">
              <div class="flex flex-col mb-20">
                <img
                  class="mb-4"
                  :src="slotProps.item"
                  style="width: 100%; display: block"
                />
                <div class="text-white text-4xl text-center mb-2">Register</div>
                <div class="text-white text-center">
                  ไฟลท์แรงใจแผดเผาเอ๋แซ็กโซโฟน พาสต้าจตุคามเกย์
                  ครัวซองต์ปิกอัพซ้อลีเมอร์เฟรชชี่ พล็อตรากหญ้าคอนเซปต์คอนโด
                  โอเลี้ยง ลาตินสต๊อคเตี๊ยมแรลลีแซลมอน ทัวร์โปรเจกต์คาเฟ่
                  สวีทคอนแทคอัลมอนด์
                </div>
              </div>
            </template>
          </Galleria>
          <button class="absolute bottom-0 left-0" @click="prev">
            <img
              :src="require('@/assets/images/arrow-dropleft-circle.png')"
              alt=""
            />
          </button>
          <button class="absolute bottom-0 right-0" @click="next">
            <img
              :src="require('@/assets/images/arrow-dropleft-circle.png')"
              style="transform: rotate(180deg)"
              alt=""
            />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ApiService from "../core/api.service.ts";
const _lineNotify = new ApiService();
export default {
  name: "ContactComp",
  data() {
    return {
      msg: {
        email: "",
      },
      fromContact: {
        businessName: "",
        fullName: "",
        email: "",
        tel: "",
        dateContact: null,
        timeContact: null,
      },
      images: [
        require("@/assets/images/logo.png"),
        require("@/assets/images/logo.png"),
        require("@/assets/images/logo.png"),
      ],
      activeIndex: 0,
      responsiveOptions: [
        {
          breakpoint: "1024px",
          numVisible: 5,
        },
        {
          breakpoint: "768px",
          numVisible: 3,
        },
        {
          breakpoint: "560px",
          numVisible: 1,
        },
      ],
    };
  },
  methods: {
    submitForm() {
      if (!this.msg.email) {
        _lineNotify.lineNotify(this.fromContact);
      } else {
        document.getElementById("txt_email").focus();
      }
    },
    validateEmail() {
      if (
        !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          this.fromContact.email
        ) &&
        this.fromContact.email
      ) {
        this.msg["email"] = "Please enter a valid email address";
      } else {
        this.msg["email"] = "";
      }
    },
    next() {
      this.activeIndex =
        this.activeIndex === this.images.length - 1 ? 0 : this.activeIndex + 1;
    },
    prev() {
      this.activeIndex =
        this.activeIndex === 0 ? this.images.length - 1 : this.activeIndex - 1;
    },
  },
};
</script>
