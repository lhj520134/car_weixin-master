
var URL = 'http://127.0.0.1:3001/';
angular.module('starter.controllers', ['baiduMap'])

    .controller('DashCtrl', function ($scope, $state) {

        $scope.goto = function () {
            $state.go("intruduct");
        }
        $scope.goto1 = function () {
            $state.go("show");
        }
        $scope.goto2 = function () {
            $state.go("order");
        }
        $scope.goto3 = function () {
            $state.go("activity");
        }
        $scope.goto4 = function () {
            $state.go("address_select");
        }
        $scope.goto5 = function () {
            $state.go("case");
        }
        $scope.goto6 = function () {
            $state.go("message");
        }
        $scope.goto7 = function () {
            $state.go("appointment");
        }

    })
    //优惠活动
    .controller('activityCtrl', function ($scope, $state, $ionicActionSheet, $http) {

        $scope.fanhui = function () {
            $state.go("dash");
        }
        $http.get( URL + 'activity', {params: {}})
            .success(function (data) {
                $scope.data = data;
            }).finally(function (p) {
            });

        //$http.post('http://127.0.0.1:3001/activity', {
        //    params: {
        //        user: '55adf8a02333d52eefb33e1a',
        //        title: "怀旧篇",
        //        content: '购买经典产品享有8折优惠,满1000还可以参加抽奖，奖品爆炸。不来好像真的是你店损失',
        //        image: 'img/car2.jpg'
        //    }
        //}).success(function () {
        //    console.log('-----success------');
        //}).finally(function () {
        //    console.log('-----finally------');
        //});
        //$http({
        //    method: 'GET', url: 'http://127.0.0.1:3001/activity',
        //
        //    params: {
        //        _id: '55adb95f4301cdbc0d2c90bf'
        //    }
        //
        //})
        //    .success(function (data) {
        //        $scope.data = data;
        //    })
        //    .error(function () {
        //
        //    });
//$scope.data = [
//    {
//        user: "---来自XX汽车维修店",
//        title: "怀旧篇",
//        content: '购买经典产品享有8折优惠,满1000还可以参加抽奖，奖品爆炸。不来好像真的是你店损失',
//        image: 'img/car2.jpg'
//    },
//    {
//        user: "---来自XX汽车维修店",
//        title: "超值篇",
//        content: '购买经典产品享有8折优惠,满1000还可以参加抽奖，奖品爆炸。不来好像真的是你店损失',
//        image: 'img/car3.jpg'
//    },
//    {
//        user: "---来自XX汽车维修店",
//        title: "未来篇",
//        content: '购买经典产品享有8折优惠,满1000还可以参加抽奖，奖品爆炸。不来好像真的是你店损失',
//        image: 'img/car4.jpg'
//    }
//
//]


        $scope.sel = function () {

            // 显示操作表
            $ionicActionSheet.show({
                buttons: [
                    {text: '<b>关注</b>'},
                    {text: '推荐给好友'},
                ],

                titleText: '做些什么吧',
                cancelText: '取消',
                buttonClicked: function (index) {
                    return true;
                }
            });

        };

    })

    .
    controller('address_selectCtrl', function ($scope, $state) {
        $scope.data = [
            {user: "134", name: "XXX汽车维修店红旗店", lat: 13.34, lng: 3434, image: 'img/car6.jpg'},
            {user: "134", name: "XX汽车维修店香洲店", lat: 13.34, lng: 3434, image: 'img/c.jpg'},
            {user: "134", name: "XX汽车维修店科干店", lat: 13.34, lng: 3434, image: 'img/car5.jpg'}
        ];
        $scope.final = function () {
            $state.go("navigation");
        };
        $scope.fanhui = function () {
            $state.go("dash");
        };
    })

    //预约查询
    .controller('appointmentCtrl', function ($scope, $state, $http) {
        $scope.fanhui = function () {
            $state.go("dash");
        }
        $scope.Appoin = {
            name: '常昊',
            phone: '13726225365',
            time: '2014/7/20，下午',
            select: '汽车保养'
        };


    })

    //案例展示
    .controller('caseCtrl', function ($scope, $state, $http) {
        $scope.fanhui = function () {
            $state.go("dash");
        }
        $scope.check = function () {
            $state.go("casecheck")
        }

        $http.get( URL + 'case', {params:{}}).success(function (data) {
            $scope.data = data;
        }).error(function (error) {
            alert(error);
        }).finally(function () {

        });

        //var data = [
        //    {
        //        user: '55adb921c945b79535f6972e',
        //        name: '你的车多久体检一次',
        //        title: '汽车安全对于车辆来说...',
        //        content: [{desc: '超高性能', type: 'image', file: 'img/car6.jpg'}]
        //    },
        //    {
        //        user: '55adbdbcc945b79535f6972f',
        //        name: 'flosd车',
        //        title: '现实',
        //        content: [{desc: '超高性能', type: 'image', file: 'img/car5.jpg'}]
        //    },
        //    {
        //        user: '55ae3e69d30ac6fc12063684',
        //        name: 'dsadda车',
        //        title: '现实',
        //        content: [{desc: '超高性能', type: 'image', file: 'img/car3.jpg'}]
        //    }
        //
        //];
        //
        //$http.post('http://127.0.0.1:3001/case', {
        //    params: data })
        //    .success(function () {
        //        alert('success');
        //    })
        //    .error(function () {
        //        alert('faile');
        //    })
        //    .finally(function () {
        //        console.log('---------------');
        //    }
        //);

    })

    //案例展示
    //.controller('casecheckCtrl', function ($scope, $state, $http) {
    //    $scope.fanhui = function () {
    //        $state.go("dash");
    //    }
    //    $scope.back = function () {
    //        $state.go("case");
    //    }
        //$scope.data = [
        //    {
        //        user: 'XXX汽车维修店',
        //        name: '你的车多久体检一次？',
        //        title: '汽车安全对于车辆来说分为主动安全和被动安全两大方面' +
        //        '主动安全就是尽量自如的操纵控制汽车。' +
        //        '无论是直线上的制动与加速还是左右打方向都应该尽量平稳，' +
        //        '不至于偏离既定的行进路线，而且不影响司机的视野与舒适性。',
        //        content: [
        //            {
        //                desc: '无论是直线上的制动与加速还是左右打方向都应该尽量平稳' +
        //                '不至于偏离既定的行进路线，而且不影响司机的视野与舒适性。',
        //                type: 'image',
        //                file: 'img/car6.jpg'
        //            },
        //            {
        //                desc: '',
        //                type: '',
        //                file: 'img/car5.jpg'
        //            }
        //        ]
        //    },
        //
        //]

    //})

    //商家介绍
    .controller('intruductionCtrl', function ($scope, $state, $http) {
        $scope.fanhui = function () {
            $state.go("dash");
        }
        $scope.data = {
            name: 'The Transformers',
            desc: '"Transformers" is one of the most successful commercial animation in history' +
            'it in the toy market audio and video market success is unprecedented.' +
            ' once all the rage in the 80 s, in many countries such as Europe and America,' +
            ' and the rise of a "deformation" hot, ' +
            '"transformers" has become a household name all over the world of nouns.',
            content: [{
                file: 'img/car6.jpg',
                desc: 'The research and development of a fighter was named the bumblebee. Is the Chevrolet a classic models, the name of the more well-known cartoon and movie "transformers" is popular with the audience in the hero'
            }]
        }


    })

    //在线预约
    .controller('orderCtrl', function ($scope, $ionicPopup, $state, $http) {


        $scope.fanhui = function () {
            $state.go("dash");
        };

        $scope.yuyue = {};
        $scope.submit = function () {

            $http.post('http://localhost:3000/order', $scope.yuyue)
                .success(function () {
                    alert('预约成功');
                })
        }


    })


    //留言
    .controller('messageCtrl', function ($scope, $state, $http) {
        $scope.fanhui = function () {
            $state.go("dash");
        };
        $scope.form = {};
        $scope.form.submit = function () {
            $http.post('http://localhost:3000/message', $scope.form)

                .success(function () {
                    $state.go('messageblock', {}, {reload: true});
                })
        }
        $scope.fanhui1 = function () {
            $state.go("messageblock");
        };


    })


    //导航
    .controller('navigationCtrl', function ($scope, $state) {
        $scope.fanhui = function () {
            $state.go("dash");
        }
        $scope.address = {
            l: '113.321084',
            s: '22.055749'
        }
        var map = new BMap.Map("allmap");
        var point = new BMap.Point(113.40, 22.07);
        var dd = null;
        var ff = null;

        map.centerAndZoom(point, 12);

        var geolocation = new BMap.Geolocation();
        geolocation.getCurrentPosition(function (r) {
            if (this.getStatus() == BMAP_STATUS_SUCCESS) {
                var mk = new BMap.Marker(r.point);
                map.addOverlay(mk);
                map.panTo(r.point);
                alert('您的位置：' + r.point.lng + ',' + r.point.lat);
                dd = r.point.lng;
                ff = r.point.lat


                var p1 = new BMap.Point(dd, ff);

                var p2 = new BMap.Point($scope.address.l, $scope.address.s);

                var driving = new BMap.DrivingRoute(map, {
                    renderOptions: {
                        map: map,
                        autoViewport: true
                    }
                });
                driving.search(p1, p2);
            }

            else {
                alert('failed' + this.getStatus());
            }

        })
    })

    //产品展示
    .controller('showCtrl', function ($scope, Chats, $state, $http) {

        $scope.fanhui = function () {
            $state.go("dash");
        }
        $scope.details = function () {
            $state.go("showdetails")
        }
        var data = [
            {
                user: '55adf8a02333d52eefb33e1a',
                desc: 'Cool cool light',
                image: 'img/car6.jpg'
            },
            {
                user: '55adf8a02333d52eefb33e1a',
                desc: 'Cool cool light',
                image: 'img/car5.jpg'
            },
            {
                user: '55adf8a02333d52eefb33e1a',
                desc: 'Cool cool light',
                image: 'img/car4.jpg'
            },
            {
                user: '55adf8a02333d52eefb33e1a',
                desc: 'Cool cool light',
                image: 'img/car3.jpg'
            }
        ]
        //$http.post( URL + 'product', {params: {
        //                user: '55adf8a02333d52eefb33e1a',
        //                desc: 'Cool cool light',
        //                image: 'img/car3.jpg'
        //            }})
        //    .success(function(data){
        //        alert('success');
        //    }).error(function (error) {
        //        alert(error);
        //    }).finally(function (callback, progerss) {
        //
        //    });

    })

    .controller('showdetailsCtrl', function ($scope, $state, $http, $ionicModal) {
        $scope.fanhui = function () {
            $state.go("show");
        }
        $ionicModal.fromTemplateUrl('image-modal.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            $scope.modal = modal;
        });
        $scope.openModal = function () {
            $scope.modal.show();
        };

        $scope.closeModal = function () {
            $scope.modal.hide();
        };
        //Cleanup the modal when we're done with it!
        $scope.$on('$destroy', function () {
            $scope.modal.remove();
        });
        // Execute action on hide modal
        $scope.$on('modal.hide', function () {
            // Execute action
        });
        // Execute action on remove modal
        $scope.$on('modal.removed', function () {
            // Execute action
        });
        $scope.$on('modal.shown', function () {
            console.log('Modal is shown!');
        });

        $scope.data = [
            {
                user: 'We manufacture, in a very awkward time。' +
                'If tomorrow will disappear, I lost more treasures.' +
                ' I am glad I am I, be you love me',
                desc: 'Cool cool light',
                image: {
                    file1: 'img/car6.jpg',
                    file2: 'img/car5.jpg',
                    file3: 'img/car4.jpg',
                    file4: 'img/car4.jpg'
                }

            }
        ]
        $scope.showImage = function (index) {
            switch (index) {
                case 1:
                    $scope.imageSrc = $scope.data[0].image.file1;
                    break;
                case 2:
                    $scope.imageSrc = $scope.data[0].image.file2;
                    break;
                case 3:
                    $scope.imageSrc = $scope.data[0].image.file3;
                    break;
                case 4:
                    $scope.imageSrc = $scope.data[0].image.file4;
                    break;
            }
            $scope.openModal();
        }


    }
)




