/**
 * Created by khaled on 8/24/15.
 */


angular.module('app.post')
    .factory('postService', function () {

        return {

            getAll:function(){
                return [
                    {
                        id:1,
                        title:'probel aadl',
                        description:'some description here',
                        image:'img.jpg',
                        lieu:'Tizi ouzou',
                        latitude:12.032511,
                        longitude:35.03,
                        createdOn: '12/05/2015'
                    },
                    {
                        id:2,
                        title:'assinissement',
                        description:'some description here',
                        image:'img.jpg',
                        lieu:'Tizi ouzou',
                        latitude:12.032511,
                        longitude:35.03,
                        createdOn: '12/05/2015'
                    }
                ]
            },

            getPost: function(id){
                var listPost  = this.getAll();
                for(var i =0; i < listPost.length; i++){
                    if(listPost[i].id == id){
                        return listPost[i];
                    }
                }
            }

        };

    })
;