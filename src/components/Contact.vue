<template>
  <div
    class="bg-gradient-to-r from-green-island-200 to-green-island-100 p-10 md:p-0"
  >
    <div
      class="bg-white rounded-3xl md:rounded-none grid grid-cols-1 md:grid-cols-2 min-h-screen"
    >
      <div class="place-self-center w-full">
        <div class="m-5 md:mx-10 lg:mx-32">
          <div class="text-3xl font-semibold mb-5">Register</div>
          <div class="text-base mb-10 text-justify">
            ไฟลท์แรงใจแผดเผาเอ๋แซ็กโซโฟน พาสต้าจตุคามเกย์
            ครัวซองต์ปิกอัพซ้อลีเมอร์เฟรชชี่ พล็อตรากหญ้าคอนเซปต์คอนโด โอเลี้ยง
            ลาตินสต๊อคเตี๊ยมแรลลีแซลมอน ทัวร์โปรเจกต์คาเฟ่ สวีทคอนแทคอัลมอนด์
            คอนเซ็ปต์บร็อกโคลีไงเดชานุภาพไฮเอนด์เจ๊แอนด์
            เซ็กซี่โฟนรีไซเคิลสมาพันธ์ ดีไซน์เนอร์โรแมนติค
          </div>
          <div class="">
            <form action="">
              <div class="form-group">
                <label class="font-semibold" for="txt_name_comp"
                  >ชื่อบริษัท</label
                >
                <InputText
                  class="w-full"
                  id="txt_name_comp"
                  placeholder="Name Company"
                  type="text"
                  v-model="fromContact.compName"
                />
              </div>
              <div class="form-group">
                <label class="font-semibold" for="txt_name_user"
                  >ชื่อผู้ติดต่อ</label
                >
                <InputText
                  class="w-full"
                  id="txt_name_user"
                  placeholder="ชื่อผู้ติดต่อ"
                  type="text"
                  v-model="fromContact.userName"
                />
              </div>
              <div class="flex flex-col md:flex-row gap-4">
                <div class="flex-1 form-group">
                  <label class="font-semibold" for="txt_email">อีเมล</label>
                  <InputText
                    class="w-full"
                    id="txt_email"
                    placeholder="อีเมล"
                    type="text"
                    v-model="fromContact.email"
                  />
                </div>
                <div class="flex-1 form-group">
                  <label class="font-semibold" for="txt_tel">เบอร์โทร</label>
                  <InputText
                    class="w-full"
                    id="txt_tel"
                    placeholder="เบอร์โทร"
                    type="text"
                    v-model="fromContact.tel"
                  />
                </div>
              </div>
              <div class="flex flex-col md:flex-row gap-4">
                <div class="flex-1 form-group">
                  <label class="font-semibold" for="txt_date"
                    >วันที่ต้องการให้ติดต่อ</label
                  >
                  <InputText
                    class="w-full"
                    id="txt_date"
                    placeholder="วันที่ต้องการให้ติดต่อ"
                    type="text"
                    v-model="fromContact.dateContact"
                  />
                </div>
                <div class="flex-1 form-group">
                  <label class="font-semibold" for="txt_date_range"
                    >ช่วงเวลาติดต่อ</label
                  >
                  <InputText
                    class="w-full"
                    id="txt_date_range"
                    placeholder="วันที่ต้องการให้ติดต่อ"
                    type="text"
                    v-model="fromContact.timeContact"
                  />
                </div>
              </div>
              <div class="mt-20 flex justify-center">
                <button
                  type="submit"
                  class="bg-green-island-200 px-6 py-2 text-white text-4xl rounded-lg"
                >
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
              <img :src="slotProps.item" style="display: block" />
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
              alt=""
            />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InputText from "primevue/inputtext";
import Galleria from "primevue/galleria";

export default {
  name: "ContactComp",
  data() {
    return {
      fromContact: {
        compName: "",
        userName: "",
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
  components: {
    InputText,
    Galleria,
  },
  methods: {
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
