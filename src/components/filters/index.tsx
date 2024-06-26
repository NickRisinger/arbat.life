export default function Filters() {
  return (
    <div className="flex flex-col gap-y-3">
      <div className="flex gap-x-3">
        <div className="">
          <input type="radio" name="category" value="Комната" id="1" />
          <label htmlFor="1">Комната</label>
        </div>
        <div className="">
          <input type="radio" name="category" value="Квартира" id="2" />
          <label htmlFor="2">Квартира</label>
        </div>
        <div className="">
          <input
            type="radio"
            name="category"
            value="Дом, дача, коттедж"
            id="3"
          />
          <label htmlFor="3">Дом, дача, коттедж</label>
        </div>
        <div className="">
          <input type="radio" name="category" value="Коммерция" id="4" />
          <label htmlFor="4">Коммерция</label>
        </div>
        <div className="">
          <input
            type="radio"
            name="category"
            value="Гаражи и машинместа"
            id="5"
          />
          <label htmlFor="5">Гаражи и машинместа</label>
        </div>
        <div className="">
          <input type="radio" name="category" value="Участки" id="6" />
          <label htmlFor="6">Участки</label>
        </div>
      </div>
      <div className="flex gap-x-2">
        <select className="w-[150px] rounded-[10px]" name="" id="">
          <option value="">Купить</option>
          <option value="">Снять</option>
        </select>

        <div className="flex w-[200px]">
          <input
            type="number"
            className="w-1/2 rounded-l-[10px]"
            placeholder="От"
          />
          <input
            type="number"
            className="w-1/2 rounded-r-[10px]"
            placeholder="До"
          />
        </div>
        <div className="flex w-[200px]">
          <input
            type="number"
            className="w-1/2 rounded-l-[10px]"
            placeholder="От"
          />
          <input
            type="number"
            className="w-1/2 rounded-r-[10px]"
            placeholder="До"
          />
        </div>
        <div className="flex w-[316px]">
          <input
            type="number"
            className="w-1/2 rounded-l-[10px]"
            placeholder="От"
          />
          <input
            type="number"
            className="w-1/2 rounded-r-[10px]"
            placeholder="До"
          />
        </div>
        <input
          type="text"
          className="w-[316px] rounded-[10px]"
          placeholder="Адрес"
        />

        <button className="rounded-[10px] bg-white p-[17px]">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.62342 2.39789C6.12048 2.39789 6.52342 2.80083 6.52342 3.29789V4.79725C7.52986 4.95264 8.30039 5.82262 8.30039 6.87256V9.87256C8.30039 10.9225 7.52986 11.7925 6.52342 11.9479V20.7021C6.52342 21.1991 6.12048 21.6021 5.62342 21.6021C5.12637 21.6021 4.72342 21.1991 4.72342 20.7021V11.9545C3.69453 11.8189 2.90039 10.9385 2.90039 9.87256V6.87256C2.90039 5.80665 3.69453 4.92623 4.72342 4.79066V3.29789C4.72342 2.80083 5.12637 2.39789 5.62342 2.39789ZM19.4234 2.39789C19.9205 2.39789 20.3234 2.80083 20.3234 3.29789V4.79725C21.3299 4.95264 22.1004 5.82262 22.1004 6.87256V9.87256C22.1004 10.9225 21.3299 11.7925 20.3234 11.9479V20.7021C20.3234 21.1991 19.9205 21.6021 19.4234 21.6021C18.9264 21.6021 18.5234 21.1991 18.5234 20.7021V11.9545C17.4945 11.8189 16.7004 10.9385 16.7004 9.87256V6.87256C16.7004 5.80665 17.4945 4.92623 18.5234 4.79066V3.29789C18.5234 2.80083 18.9264 2.39789 19.4234 2.39789ZM12.4658 2.39789C12.9629 2.39789 13.3658 2.80083 13.3658 3.29789L13.3658 12.0455C14.3947 12.1811 15.1889 13.0615 15.1889 14.1274L15.1889 17.1274C15.1889 18.1933 14.3947 19.0737 13.3658 19.2093V20.7021C13.3658 21.1991 12.9629 21.6021 12.4658 21.6021C11.9688 21.6021 11.5658 21.1991 11.5658 20.7021V19.2027C10.5594 19.0473 9.78887 18.1774 9.78887 17.1274V14.1274C9.78887 13.0775 10.5594 12.2075 11.5658 12.0521L11.5658 3.29789C11.5658 2.80083 11.9688 2.39789 12.4658 2.39789ZM5.00039 6.57256C4.83471 6.57256 4.70039 6.70688 4.70039 6.87256V9.87256C4.70039 10.0382 4.83471 10.1726 5.00039 10.1726H6.20039C6.36608 10.1726 6.50039 10.0382 6.50039 9.87256V6.87256C6.50039 6.70688 6.36608 6.57256 6.20039 6.57256H5.00039ZM18.8004 6.57256C18.6347 6.57256 18.5004 6.70688 18.5004 6.87256V9.87256C18.5004 10.0382 18.6347 10.1726 18.8004 10.1726H20.0004C20.1661 10.1726 20.3004 10.0382 20.3004 9.87256V6.87256C20.3004 6.70688 20.1661 6.57256 20.0004 6.57256H18.8004ZM11.8889 13.8274C11.7232 13.8274 11.5889 13.9617 11.5889 14.1274V17.1274C11.5889 17.2931 11.7232 17.4274 11.8889 17.4274H13.0889C13.2546 17.4274 13.3889 17.2931 13.3889 17.1274L13.3889 14.1274C13.3889 13.9617 13.2546 13.8274 13.0889 13.8274H11.8889Z"
              fill="#2F2F2F"
            />
          </svg>
        </button>
        <button className="rounded-[10px] bg-[#E2061A] p-[17px] text-white">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.9186 4.20002C7.48436 4.20002 4.70039 6.984 4.70039 10.4182C4.70039 13.8524 7.48436 16.6364 10.9186 16.6364C14.3528 16.6364 17.1368 13.8524 17.1368 10.4182C17.1368 6.984 14.3528 4.20002 10.9186 4.20002ZM2.90039 10.4182C2.90039 5.98989 6.49025 2.40002 10.9186 2.40002C15.3469 2.40002 18.9368 5.98989 18.9368 10.4182C18.9368 12.3081 18.2829 14.0453 17.1891 15.4159L21.8368 20.0636C22.1882 20.4151 22.1882 20.9849 21.8368 21.3364C21.4853 21.6879 20.9155 21.6879 20.564 21.3364L15.9163 16.6887C14.5457 17.7825 12.8085 18.4364 10.9186 18.4364C6.49025 18.4364 2.90039 14.8465 2.90039 10.4182Z"
              fill="white"
            />
          </svg>
        </button>
      </div>

      <div className="fixed left-[50%] top-[50%] z-20 flex h-5/6 w-[604px] -translate-x-[50%] -translate-y-[50%] flex-col gap-y-8 overflow-hidden rounded border border-gray-200 bg-white p-8 shadow-[0px_0px_24px_0px_#687D861A] transition-all duration-300">
        <div className="relative flex items-center justify-between">
          <div className="flex items-center gap-x-5">
            <h2 className="text-2xl font-semibold text-[#2F2F2F]">
              Все фильтры
            </h2>
            <select name="" id="">
              <option value="2">Квартиры</option>
              <option value="1">Комнаты</option>
              <option value="3">Дома, дачи, коттеджи</option>
              <option value="7">Новостройки</option>
              <option value="4">Коммерческая</option>
              <option value="5">Земельные участки</option>
              <option value="6">Гаражи и машинместа</option>
            </select>
          </div>
          <button className="">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.71967 4.71967C5.01256 4.42678 5.48744 4.42678 5.78033 4.71967L10 8.93934L14.2197 4.71967C14.5126 4.42678 14.9874 4.42678 15.2803 4.71967C15.5732 5.01256 15.5732 5.48744 15.2803 5.78033L11.0607 10L15.2803 14.2197C15.5732 14.5126 15.5732 14.9874 15.2803 15.2803C14.9874 15.5732 14.5126 15.5732 14.2197 15.2803L10 11.0607L5.78033 15.2803C5.48744 15.5732 5.01256 15.5732 4.71967 15.2803C4.42678 14.9874 4.42678 14.5126 4.71967 14.2197L8.93934 10L4.71967 5.78033C4.42678 5.48744 4.42678 5.01256 4.71967 4.71967Z"
                fill="#2F2F2F"
              />
            </svg>
          </button>
        </div>
        <div className="vertical-scrollbar scrollbar-md relative h-full w-full overflow-hidden overflow-y-auto">
          <div className="bg-slate-100">
            <div className=""></div>
            <div className="grid grid-cols-2">
              <div className="">Город</div>
              <div className="">Общая площадь, м²</div>
              <div className="">Адрес</div>
              <div className="">Жилая площадь, м²</div>
              <div className="">Этаж</div>
              <div className="">Площадь кухни, м²</div>
              <div className="">Менеджер</div>
            </div>
          </div>
        </div>
        <div className="relative flex items-center gap-x-3">
          <button className="h-[48px] rounded-[10px] bg-[#E2061A] px-4 py-[14px] text-white">
            Показать объявления
          </button>
          <button className="h-[48px] rounded-[10px] border border-[#C5C5C5] px-4 py-[14px]">
            Сбросить
          </button>
        </div>
      </div>
    </div>
  );
}
