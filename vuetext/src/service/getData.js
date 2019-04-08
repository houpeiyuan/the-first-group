 //获取数据的统一调配文件，对接口进行统一管理
 export const searchNearby = keyword => fetch('/v1/pois', {
   type: 'nearby',
   keyword
 });
