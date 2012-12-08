/**
 * Created with JetBrains PhpStorm.
 * Author: Shaman
 * Date: 12-12-2
 * Time: 下午11:13
 * To change this template use File | Settings | File Templates.
 *
 * 游戏数据资源
 */

define(function(require, exports, module){

    module.exports = {
        dialog : {
            angle : {
                "dialog_direct" : "up",
                "dialog_1" :{
                    "condition" : null ,   //触发条件下一对话的条件  无
                    "text" : [
                        {"figure" : "player" , "text" : "喔..."},
                        {"figure" : "angle" , "text" : "你醒了！"},
                        {"figure" : "player" , "text" : "你是谁？这是什么地方，我在哪里？"},
                        {"figure" : "angle" , "text" : "我是这里的仙子。"},
                        {"figure" : "angle" , "text" : "刚才你被这里的怪物打昏了。"},
                        {"figure" : "player" , "text" : "剑，剑，我的剑呢？"},
                        {"figure" : "angle" , "text" : "你的剑被他们抢走了，我只来得及将你救出来。"},
                        {"figure" : "player" , "text" : "那，你有看到公主吗？我是来救公主的。"},
                        {"figure" : "angle" , "text" : "公主还在里面，你这样进去是打不过里面的小怪的。"},
                        {"figure" : "player" , "text" : "那我怎么办，我答应了国王一定要把公主救出来的，那我现在应该怎么办呢？"},
                        {"figure" : "angle" , "text" : "放心吧，我把我的力量借给你，你就可以打赢那些小怪了。不过，你得先帮我去找一样东西，找到了再来这里找我。"},
                        {"figure" : "player" , "text" : "找东西？找什么东西？"},
                        {"figure" : "angle" , "text" : "是一个十字架，中间有一颗红色的宝石。"},
                        {"figure" : "player" , "text" : "那个东西有什么用吗？"},
                        {"figure" : "angle" , "text" : "我本是这座塔守护者，可不久前，从北方来了一批恶魔，并将我的魔力封在了这个十字架里面，如果你能将它带出塔来，那我的魔力便会慢慢地恢复，到那时我便可以把力量借给你去救出公主了。要记住：只有用我的魔力才能打开二十一层的门。"},
                        {"figure" : "player" , "text" : "......好吧，我试试看。"},
                        {"figure" : "angle" , "text" : "刚才我去看过了，你的剑被放在四楼，你的盾在六楼上，而那个十字架被放在八楼。要到八楼，你的先取回你的剑和盾。另外，在塔里的其它楼层上，还有一些存放了好几百年的宝剑和宝物，如果得到它们，对于你对付这里面的怪物将有很大的帮助。我这里有三把钥匙，你先拿去，在塔里面还有很多这样的钥匙，你一定要珍惜使用。"}
                    ],
                    "jiangli" : {
                        "type" : "items" ,
                        "pro" : {
                            "yellow_key" : 1 ,
                            "blue_key" : 1,
                            "red_key" : 1
                        }
                    }
                },
                "dialog_2" : {
                    "condition" : "smszj" ,  //触发条件下一对话的条件  需要圣母十字架
                    "text" : [
                        {"figure" : "angle" , "text" : "如果你拿到了<em>【圣母十字架】</em>，我把我的力量借给你，你就可以打赢那些小怪了。"}
                    ],
                    "jiangli" : null
                },
                "dialog_3" : {
                    "condition" : null ,
                    "text" : [
                        {"figure" : "player" , "text" : "仙子，我已经将那个十字架找到了。"},
                        {"figure" : "angle" , "text" : "你做得很好。那么，现在我就开始授与你更强的力量！咪啦哆咪哗......好了，我已经将你现在的力量提升了！记住：如果你没有足够的实力的话，不要去第二十一层！在那一层里，你所有宝物的法力都会失去作用！快走吧，杀死魔王后，来第二十二层上找我！"}
                    ],
                    "jiangli" : {
                        "type" : "powerUp" ,
                        "pro" : {
                            "health" : 1.3,
                            "attack" : 1.3 ,
                            "defense" : 1.3
                        }
                    }
                },
                "dialog_4" : {
                    "condition" : "limit" ,
                    "text" : [
                        {"figure" : "angle" , "text" : "加油勇士！你一定能救出公主的。"}
                    ],
                    "jiangli" : null
                }
            },
            smlr_03 : {   //第三层神秘老人
                "dialog_direct" : "up",
                "dialog_1" : {
                    "condition" : null ,
                    "text" : [
                        {"figure" : "player" , "text" : "您已经得救了！"},
                        {"figure" : "神秘老人" , "text" : "哦，我的孩子，真是太感谢你了！这个地方又脏又坏，我真的是快呆不下去了。"},
                        {"figure" : "player" , "text" : "快走吧，我还得去救被关在这里的公主。"},
                        {"figure" : "神秘老人" , "text" : "哦，你是来救公主的，为了表示对你的感谢，这个东西就送给你吧，这还是我年轻的时候用过的。拿着它去解救公主吧！"}
                    ],
                    "jiangli" : {
                        "type" : "abillity" ,
                        "pro" : {
                            "attack" : 70
                        }
                    }
                },
                "dialog_2" : {
                    "condition" : "limit" ,
                    "text" : [
                        {"figure" : "神秘老人" , "text" : "加油勇士！你一定能救出公主的。"}
                    ],
                    "jiangli" : null
                }
            },
            sr_03 : {   //第三层商人
                "dialog_direct" : "up",
                "dialog_1" : {
                    "condition" : null ,
                    "text" : [
                        {"figure" : "player" , "text" : "您已经得救了！"},
                        {"figure" : "商人" , "text" : "哦，是嘛！真是太感谢你了！我是个商人，不知道为什么被抓到这里来了。"},
                        {"figure" : "player" , "text" : "现在您已经自由了。"},
                        {"figure" : "商人" , "text" : "哦，对对对，我已经自由了。那这个东西就给你吧，本来我是准备卖钱的。相信它对你一定很有帮助！"}
                    ],
                    "jiangli" : {
                        "type" : "abillity" ,
                        "pro" : {
                            "defense" : 30
                        }
                    }
                },
                "dialog_2" : {
                    "condition" : "limit" ,
                    "text" : [
                        {"figure" : "商人" , "text" : "勇士，你救了我，真是太感谢你了！"}
                    ],
                    "jiangli" : null
                }
            },
            smlr_16 : {   //第十六层神秘老人
                "dialog_direct" : "up",
                "dialog_1" : {
                    "condition" : "expe" ,
                    "value" : 500,
                    "text" : [
                        {"figure" : "神秘老人" , "text" : "你好，勇敢的孩子，你终于来到这里了。我将给你一个非常好的宝物，它可以使你的攻击力提升120点，但这必须的用你的500点经验来进行交换，考虑一下子吧！"}
                    ],
                    "jiangli" : null
                },
                "dialog_2" : {
                    "condition" : null ,
                    "text" : [
                        {"figure" : "神秘老人" , "text" : "怎么样？你有500经验了吗？"},
                        {"figure" : "player" , "text" : "好吧，那就将那把剑给我吧！"},
                        {"figure" : "神秘老人" , "text" : "那好吧，这把剑就给你了！"}
                    ],
                    "jiangli" : {
                        "type" : "abillity" ,
                        "pro" : {
                            "attack" : 120
                        }
                    }
                },
                "dialog_3" : {
                    "condition" : "limit" ,
                    "text" : [
                        {"figure" : "神秘老人" , "text" : "勇敢的孩子，愿你早日救出公主！"}
                    ],
                    "jiangli" : null
                }
            },
            sr_16 : {   //第十六层商人
                "dialog_direct" : "up",
                "dialog_1" : {
                    "condition" : "money" ,
                    "value" : 500,
                    "text" : [
                        {"figure" : "神秘商人" , "text" : "啊哈，欢迎你的到来！我这里有一件对你来说非常好的宝物，只要你出得起钱，我就卖给你。"},
                        {"figure" : "player" , "text" : "什么宝物？要多少钱？"},
                        {"figure" : "神秘商人" , "text" : "是这个游戏里最好的盾牌，防御值可以增加120点，而你只要出500个金币就可以买下。"}
                    ],
                    "jiangli" : null
                },
                "dialog_2" : {
                    "condition" : null ,
                    "text" : [
                        {"figure" : "神秘商人" , "text" : "怎么样？你有500个金币吗？"},
                        {"figure" : "player" , "text" : "我有500个金币。"},
                        {"figure" : "神秘商人" , "text" : "好，成交！"}
                    ],
                    "jiangli" : {
                        "type" : "abillity" ,
                        "pro" : {
                            "defense" : 120
                        }
                    }
                },
                "dialog_3" : {
                    "condition" : "limit" ,
                    "text" : [
                        {"figure" : "神秘商人" , "text" : "年轻人，时间就是金钱，抓紧时间。"}
                    ],
                    "jiangli" : null
                }
            },
            shop_m_l : {  //低级商店（使用金币购物）
                "dialog_direct" : "down",
                "dialog_1" : {
                    "condition" : "limit" ,
                    "text" : [
                        {"figure" : "商店老板" , "text" : "你好勇士，欢迎来到 <span class='shopName'>初级怪物商店</span> 。告诉你一些操作方法：键盘 '<span class='shopKey'>&uarr;</span>' 和 '<span class='shopKey'>&darr;</span>' 可以控制上下选择，按 '<span class='shopKey'>回车</span>' 确认选择。确保你有足够的金币哦！"}
                    ],
                    "jiangli" : null
                }
            },
            shop_m_h : {  //低级商店（使用金币购物）
                "dialog_direct" : "up",
                "dialog_1" : {
                    "condition" : "limit" ,
                    "text" : [
                        {"figure" : "商店老板" , "text" : "你好勇士，欢迎来到 <span class='shopName'>高级怪物商店</span> 。确保你有足够的金币哦！"}
                    ],
                    "jiangli" : null
                }
            },
            shop_e_l : {  //低级商店（使经验购物）
                "dialog_direct" : "up",
                "dialog_1" : {
                    "condition" : "limit" ,
                    "text" : [
                        {"figure" : "商店老板" , "text" : "你好勇士，欢迎来到 <span class='shopName'>初级勇士商店</span> 。键盘 '<span class='shopKey'>&uarr;</span>' 和 '<span class='shopKey'>&darr;</span>' 可以控制上下选择，按 '<span class='shopKey'>回车</span>' 确认选择。只要你有足够的经验，我就可以让你变得更强大！"}
                    ],
                    "jiangli" : null
                }
            },
            shop_e_h : {  //高级商店（使经验购物）
                "dialog_direct" : "up",
                "dialog_1" : {
                    "condition" : "limit" ,
                    "text" : [
                        {"figure" : "商店老板" , "text" : "你好勇士，欢迎来到 <span class='shopName'>高级勇士商店</span> 。键盘 '<span class='shopKey'>&uarr;</span>' 和 '<span class='shopKey'>&darr;</span>' 可以控制上下选择，按 '<span class='shopKey'>回车</span>' 确认选择。只要你有足够的经验，我就可以让你变得更强大！"}
                    ],
                    "jiangli" : null
                }
            },
            shop_key_sell : {  //买钥匙
                "dialog_direct" : "down",
                "dialog_1" : {
                    "condition" : "limit" ,
                    "text" : [
                        {"figure" : "商店老板" , "text" : "相信你一定有特殊的需要，只要你有金币，我就可以帮你！"}
                    ],
                    "jiangli" : null
                }
            },
            shop_key_buy : {  //卖钥匙
                "dialog_direct" : "down",
                "dialog_1" : {
                    "condition" : "limit" ,
                    "text" : [
                        {"figure" : "商店老板" , "text" : "朋友你缺钱用吗？只要你不需要的破烂，我就可以帮你！"}
                    ],
                    "jiangli" : null
                }
            },
            jack : {
                "dialog_direct" : "down",
                "dialog_1" :{
                    "condition" : null ,   //触发条件下一对话的条件  无
                    "text" : [
                        {"figure" : "player" , "text" : "你已经得救了！"},
                        {"figure" : "小偷" , "text" : "啊，那真是太好了，我又可以在这里面寻宝了！哦，还没有自我介绍，我叫 <span class='npcName'>杰克</span> ，是这附近有名的小偷，什么金银财宝我样样都偷过。不过这次运气可不是太好，刚进来就被抓了。现在你帮我打开了门，那我就帮你做一件事吧。"},
                        {"figure" : "player" , "text" : "快走吧，外面还有很多怪物，我可能顾不上你。"},
                        {"figure" : "小偷" , "text" : "不，不，不会有事的。快说吧，叫我做什么？"},
                        {"figure" : "player" , "text" : "。。。。。。你会开门吗？"},
                        {"figure" : "小偷" , "text" : "那当然。"},
                        {"figure" : "player" , "text" : "那就请你帮我打开第三层的门吧！"},
                        {"figure" : "小偷" , "text" : "那个简单，不过，如果你能帮我找到一把嵌了红宝石的铁锒头的话，我还帮你打通第十八层的路。"},
                        {"figure" : "player" , "text" : "嵌了红宝石的铁锒头？好吧，我帮你找找。"},
                        {"figure" : "小偷" , "text" : "非常地感谢。一会我便会把第二层的门打开。如果你找到那个铁锒头的话，还是来这里找我！"}
                    ],
                    "jiangli" : {
                        "type" : "changeMap" ,
                        "pro" : {
                            f : 3,
                            x : 1,
                            y : 6
                        }
                    }
                },
                "dialog_2" : {
                    "condition" : "xgsl" ,
                    "text" : [
                        {"figure" : "杰克" , "text" : "如果你能帮我找到一把嵌了红宝石的铁锒头的话，我还帮你打通第十八层的路。"}
                    ],
                    "jiangli" : null
                },
                "dialog_3" : {
                    "condition" : null ,
                    "text" : [
                        {"figure" : "player" , "text" : "哈，快看，我找到了什么！"},
                        {"figure" : "杰克" , "text" : "太好了，这个东西果然是在这里。好吧，我这就去帮你修好第十八层的路面。"}
                    ],
                    "jiangli" : null
                },
                "dialog_4" : {
                    "condition" : "limit" ,
                    "text" : [
                        {"figure" : "杰克" , "text" : "你是我碰到过的最勇敢的勇士！"}
                    ],
                    "jiangli" : null
                }
            }
        },

        monster : {
            "enemy_01" : { "values" : { "health" : 50, "attack" : 20, "defense" : 1}, "CH_name" : "绿头怪", "win" : { "money" : 1, "expe" : 1 } } ,
            "enemy_02" : { "values" : { "health" : 70, "attack" : 15, "defense" : 2}, "CH_name" : "红头怪", "win" : { "money" : 2, "expe" : 2 } } ,
            "enemy_03" : { "values" : { "health" : 100, "attack" : 20, "defense" : 5}, "CH_name" : "小蝙蝠", "win" : { "money" : 3, "expe" : 3 } } ,
            "enemy_04" : { "values" : { "health" : 110, "attack" : 25, "defense" : 5}, "CH_name" : "骷髅人", "win" : { "money" : 5, "expe" : 4 } } ,
            "enemy_05" : { "values" : { "health" : 200, "attack" : 35, "defense" : 10}, "CH_name" : "青头怪", "win" : { "money" : 5, "expe" : 5 } } ,
            "enemy_06" : { "values" : { "health" : 150, "attack" : 40, "defense" : 20}, "CH_name" : "骷髅士兵", "win" : { "money" : 8, "expe" : 6 } } ,
            "enemy_07" : { "values" : { "health" : 125, "attack" : 50, "defense" : 25}, "CH_name" : "初级法师", "win" : { "money" : 10, "expe" : 7 } } ,
            "enemy_08" : { "values" : { "health" : 150, "attack" : 65, "defense" : 30}, "CH_name" : "大蝙蝠", "win" : { "money" : 10, "expe" : 8 } } ,
            "enemy_09" : { "values" : { "health" : 300, "attack" : 75, "defense" : 45}, "CH_name" : "兽面人", "win" : { "money" : 13, "expe" : 10 } } ,
            "enemy_10" : { "values" : { "health" : 400, "attack" : 90, "defense" : 50}, "CH_name" : "骷髅队长", "win" : { "money" : 15, "expe" : 12 } } ,
            "enemy_11" : { "values" : { "health" : 500, "attack" : 115, "defense" : 65}, "CH_name" : "石头怪人", "win" : { "money" : 15, "expe" : 15 } } ,
            "enemy_12" : { "values" : { "health" : 250, "attack" : 120, "defense" : 70}, "CH_name" : "麻衣法师", "win" : { "money" : 20, "expe" : 17 } } ,
            "enemy_13" : { "values" : { "health" : 450, "attack" : 150, "defense" : 90}, "CH_name" : "初级卫兵", "win" : { "money" : 22, "expe" : 19 } } ,
            "enemy_14" : { "values" : { "health" : 550, "attack" : 160, "defense" : 90}, "CH_name" : "红蝙蝠", "win" : { "money" : 25, "expe" : 20 } } ,
            "enemy_15" : { "values" : { "health" : 100, "attack" : 200, "defense" : 110}, "CH_name" : "高级法师", "win" : { "money" : 30, "expe" : 25 } } ,
            "enemy_16" : { "values" : { "health" : 700, "attack" : 250, "defense" : 125}, "CH_name" : "怪王", "win" : { "money" : 32, "expe" : 30 } } ,
            "enemy_17" : { "values" : { "health" : 1300, "attack" : 300, "defense" : 150}, "CH_name" : "白衣武士", "win" : { "money" : 40, "expe" : 35 } } ,
            "enemy_18" : { "values" : { "health" : 850, "attack" : 350, "defense" : 200}, "CH_name" : "金卫士", "win" : { "money" : 45, "expe" : 40 } } ,
            "enemy_19" : { "values" : { "health" : 500, "attack" : 400, "defense" : 260}, "CH_name" : "红衣法师", "win" : { "money" : 47, "expe" : 45 } } ,
            "enemy_20" : { "values" : { "health" : 900, "attack" : 450, "defense" : 330}, "CH_name" : "兽面武士", "win" : { "money" : 50, "expe" : 50 } } ,
            "enemy_21" : { "values" : { "health" : 1250, "attack" : 500, "defense" : 400}, "CH_name" : "冥卫兵", "win" : { "money" : 55, "expe" : 55 } } ,
            "enemy_22" : { "values" : { "health" : 1500, "attack" : 560, "defense" : 460}, "CH_name" : "高级卫兵", "win" : { "money" : 60, "expe" : 60 } } ,
            "enemy_23" : { "values" : { "health" : 1200, "attack" : 620, "defense" : 520}, "CH_name" : "双手剑士", "win" : { "money" : 65, "expe" : 75 } } ,
            "enemy_24" : { "values" : { "health" : 2000, "attack" : 680, "defense" : 590}, "CH_name" : "冥战士", "win" : { "money" : 70, "expe" : 65 } } ,
            "enemy_25" : { "values" : { "health" : 900, "attack" : 750, "defense" : 650}, "CH_name" : "金队长", "win" : { "money" : 77, "expe" : 70 } } ,
            "enemy_26" : { "values" : { "health" : 1500, "attack" : 830, "defense" : 730}, "CH_name" : "灵法师", "win" : { "money" : 80, "expe" : 70 } } ,
            "enemy_27" : { "values" : { "health" : 2500, "attack" : 900, "defense" : 850}, "CH_name" : "冥队长", "win" : { "money" : 84, "expe" : 75 } } ,
            "enemy_28" : { "values" : { "health" : 1200, "attack" : 980, "defense" : 900}, "CH_name" : "灵武士", "win" : { "money" : 88, "expe" : 75 } } ,
            "enemy_29" : { "values" : { "health" : 3100, "attack" : 1150, "defense" : 1050}, "CH_name" : "影子战士", "win" : { "money" : 92, "expe" : 80 } } ,
            "enemy_30" : { "values" : { "health" : 15000, "attack" : 1000, "defense" : 1000}, "CH_name" : "红衣魔王", "win" : { "money" : 100, "expe" : 100 } } ,
            "enemy_31" : { "values" : { "health" : 30000, "attack" : 1700, "defense" : 1500}, "CH_name" : "冥灵魔王", "win" : { "money" : 250, "expe" : 220 } } ,
            "enemy_32" : { "values" : { "health" : 99999, "attack" : 5000, "defense" : 4000}, "CH_name" : "血影", "win" : { "money" : 0, "expe" : 0 } } ,
            "enemy_33" : { "values" : { "health" : 99999, "attack" : 9999, "defense" : 5000}, "CH_name" : "魔龙", "win" : { "money" : 0, "expe" : 0 } }
        },

        door : {
            "yellow_door" : {
                "need" : "yellow_key",
                "values" : {
                    "yellow_key" : -1
                },
                "CH_name" : "黄门"
            },
            "blue_door" : {
                "need" : "blue_key",
                "values" : {
                    "blue_key" : -1
                },
                "CH_name" : "蓝门"
            },
            "red_door" : {
                "need" : "red_key",
                "values" : {
                    "red_key" : -1
                },
                "CH_name" : "红门"
            },
            "fence" : {
                "need" : null,
                "values" : null,
                "CH_name" : "栅栏"
            },
            "gold_door" : {
                "need" : null,
                "values" : null,
                "CH_name" : "黄金门"
            }
        },

        item : {
            "yellow_key" : {
                "values" : {
                    "yellow_key" : 1
                },
                "CH_name" : "黄钥匙"
            },
            "blue_key" : {
                "values" : {
                    "blue_key" : 1
                },
                "CH_name" : "蓝钥匙"
            },
            "red_key" : {
                "values" : {
                    "red_key" : 1
                },
                "CH_name" : "红钥匙"
            },
            "keyList" : {
                "values" : {
                    "yellow_key" : 1,
                    "blue_key" : 1,
                    "red_key" : 1
                },
                "CH_name" : "钥匙链"
            },
            "blue_stone" : {
                "values" : {
                    "defense" : 3
                },
                "CH_name" : "蓝宝石"
            },
            "red_stone" : {
                "values" : {
                    "attack" : 3
                },
                "CH_name" : "红宝石"
            },
            "red_potions" : {
                "values" : {
                    "health" : 200
                },
                "CH_name" : "小血瓶"
            },
            "blue_potions" : {
                "values" : {
                    "health" : 500
                },
                "CH_name" : "大血瓶"
            },
            "sword_1" : {
                "values" : {
                    "attack" : 10
                },
                "CH_name" : "铁剑"
            },
            "sword_2" : {
                "values" : {
                    "attack" : 70
                },
                "CH_name" : "青锋剑"
            },
            "sgh" : {
                "values" : "item",
                "name" : "sgh",
                "CH_name" : "圣光徽"
            },
            "fzlp" : {
                "values" : "item",
                "name" : "fzlp",
                "CH_name" : "风之罗盘"
            },
            "smszj" : {
                "values" : "item",
                "name" : "smszj",
                "CH_name" : "圣母十字架"
            },
            "xgsl" : {
                "values" : "item",
                "name" : "xgsl",
                "CH_name" : "星光神锒"
            },
            "tiedun" : {
                "values" : {
                    "defense" : 10
                },
                "CH_name" : "铁盾"
            },
            "hjd" : {
                "values" : {
                    "defense" : 85
                },
                "CH_name" : "黄金盾"
            },
            "xiaofeiyu" : {
                "values" : {
                    "rank" : 1,
                    "health" : 1000,
                    "attack" : 10,
                    "defense" : 10
                },
                "CH_name" : "小飞羽"
            },
            "dafeiyu" : {
                "values" : {
                    "rank" : 3,
                    "health" : 3000,
                    "attack" : 30,
                    "defense" : 30
                },
                "CH_name" : "大飞羽"
            },
            "jinbidai" : {
                "values" : {
                    "money" : 300
                },
                "CH_name" : "金币袋"
            },
            "ssp" : {
                "CH_name" : "圣水瓶"
            }
        },

        map : {
            "updata_player_position" : [
                {},
                { "go_up" : {x : 5 , y : 1} },
                { "go_up" : {x : 1 , y : 0}, "go_down" : {x : 5 , y : 9} },
                { "go_up" : {x : 0 , y : 9}, "go_down" : {x : 0 , y : 1} },
                { "go_up" : {x : 10 , y : 9}, "go_down" : {x : 1 , y : 10} },
                { "go_up" : {x : 0 , y : 9}, "go_down" : {x : 10 , y : 9} },  //5层
                { "go_up" : {x : 9 , y : 9}, "go_down" : {x : 1 , y : 10} },
                { "go_up" : {x : 5 , y : 10}, "go_down" : {x : 9 , y : 9} },
                { "go_up" : {x : 1 , y : 0}, "go_down" : {x : 5 , y : 10} },
                { "go_up" : {x : 7 , y : 4}, "go_down" : {x : 0 , y : 1} },
                { "go_up" : {x : 6 , y : 7}, "go_down" : {x : 6 , y : 3} },   //10层
                { "go_up" : {x : 0 , y : 9}, "go_down" : {x : 4 , y : 6} },
                { "go_up" : {x : 9 , y : 10}, "go_down" : {x : 1 , y : 10} },
                { "go_up" : {x : 1 , y : 10}, "go_down" : {x : 9 , y : 10} },
                { "go_up" : {x : 4 , y : 10}, "go_down" : {x : 1 , y : 10} },
                { "go_up" : {x : 5 , y : 0}, "go_down" : {x : 5 , y : 9} },   //15层
                { "go_up" : {x : 7 , y : 0}, "go_down" : {x : 3 , y : 0} },
                { "go_up" : {x : 5 , y : 6}, "go_down" : {x : 5 , y : 0} },
                { "go_up" : {x : 1 , y : 10}, "go_down" : {x : 5 , y : 8} },
                { "go_up" : {x : 9 , y : 10}, "go_down" : {x : 1 , y : 10} },
                { "go_up" : {x : 5 , y : 4}, "go_down" : {x : 9 , y : 10} },  //20层
                { "go_up" : {x : 6 , y : 7}, "go_down" : {x : 6 , y : 3} },
                { "go_up" : {x : 5 , y : 4}, "go_down" : {x : 5 , y : 5} }
            ],
            "floor_1" : [
                [102 , 104 , 104 , 104 , 104 , 108 , 104 , 104 , 104 , 104 , 102],
                [102 , 104 , 104 , 104 , 104 ,     , 104 , 104 , 104 , 104 , 102],
                [102 , 104 , 104 , 104 , 104 ,     , 104 , 104 , 104 , 104 , 102],
                [102 , 104 , 104 , 104 , 104 ,     , 104 , 104 , 104 , 104 , 102],
                [102 , 104 , 104 , 104 , 104 ,     , 104 , 104 , 104 , 104 , 102],
                [102 , 104 , 104 , 104 , 104 ,     , 104 , 104 , 104 , 104 , 102],
                [102 , 102 , 104 , 104 , 104 ,     , 104 , 104 , 104 , 102 , 102],
                [102 , 102 , 102 , 102 , 102 , 123 , 102 , 102 , 102 , 102 , 102],
                [103 , 102 , 103 , 102 ,     , 110 ,     , 102 , 103 , 102 , 103],
                [103 , 103 , 103 , 103 , 103 , 146 , 103 , 103 , 103 , 103 , 103],
                [103 , 103 , 103 , 103 , 103 , 101 , 103 , 103 , 103 , 103 , 103]
            ],
            "floor_2" : [
                [108 ,     , 127 , 147 , 148 , 147 ,     ,     ,     ,     ,    ],
                [102 , 102 , 102 , 102 , 102 , 102 , 102 , 102 , 102 , 102 ,    ],
                [133 ,     , 150 , 123 ,     , 102 , 133 , 127 , 133 , 102 ,    ],
                [127 , 150 , 132 , 102 ,     , 102 , 133 , 127 , 133 , 102 ,    ],
                [102 , 123 , 102 , 102 ,     , 102 , 102 , 102 , 151 , 102 ,    ],
                [127 , 152 ,     , 102 ,     , 123 , 153 , 147 , 149 , 102 ,    ],
                [131 ,     , 128 , 102 ,     , 102 , 102 , 102 , 102 , 102 ,    ],
                [102 , 123 , 102 , 102 ,  ,  ,  ,  ,  ,  ,    ],
                [    , 152 ,     , 102 , 102 , 125 , 102 , 102 , 102 , 123 , 102],
                [133 , 134 , 127 , 102 , 129 , 101  ,  , 102 , 127 , 155 , 128],
                [133 , 137 , 127 , 102 ,     , 109 ,  , 102 , 127 , 127 , 127]
            ],
            "floor_3" : [],
            "floor_4" : [],
            "floor_5" : [],
            "floor_6" : [],
            "floor_7" : [],
            "floor_8" : [],
            "floor_9" : [],
            "floor_10" : [],
            "floor_11" : [],
            "floor_12" : [],
            "floor_13" : [],
            "floor_14" : [],
            "floor_15" : [],
            "floor_16" : [],
            "floor_17" : [],
            "floor_18" : [],
            "floor_19" : [],
            "floor_20" : [],
            "floor_21" : [],
            "floor_22" : []
        },

        //地图上对象代号
        _map : {
            100 : null,  //空位
            101 : "player",  //玩家
            102 : "_Wall",  //墙壁
            103 : "_Fire",  //火堆
            104 : "_Sky",  //星空
            105 : "gold_door",  //黄金门
            106 : "_Shop_left",  //商店左墙壁
            107 : "_Shop_right",  //商店右墙壁
            108 : "_Up_stairs",  //向上楼梯
            109 : "_Down_stairs",  //向下楼梯
            110 : 'angle',  //仙子
            111 : 'shop_m_l',  //低级商店（金币购物）
            112 : 'shop_m_h',  //高级商店（金币购物）
            113 : 'shop_e_l',  //低级商店（经验购物）
            114 : 'shop_e_h',  //高级商店（经验购物）
            115 : 'shop_key_sell',  //买钥匙的
            116 : 'shop_key_buy',  //卖钥匙的
            117 : 'jack',  //小偷杰克
            118 : 'smlr_03',  //第三层的神秘老人
            119 : 'sr_03',  //第三层的商人
            120 : 'smlr_16',  //第十六层的神秘老人
            121 : 'sr_16',  //第十六层的商人
            122 : 'princess',  //公主
            123 : 'yellow_door',  //黄门
            124 : 'blue_door',  //蓝门
            125 : 'red_door',  //红门
            126 : 'fence',  //栅栏
            127 : 'yellow_key',  //黄钥匙
            128 : 'blue_key',  //蓝钥匙
            129 : 'red_key',  //红钥匙
            130 : 'keyList',  //钥匙链
            131 : 'blue_stone',
            132 : 'red_stone',
            133 : 'red_potions',
            134 : 'blue_potions',
            135 : 'sword_1',
            136 : 'sword_2',
            137 : 'sgh',
            138 : 'fzlp',
            139 : 'smszj',
            140 : 'xgsl',
            141 : 'tiedun',
            142 : 'hjd',
            143 : 'xiaofeiyu',
            144 : 'dafeiyu',
            145 : 'jinbidai',
            146 : 'ssp',
            147 : 'enemy_01',
            148 : 'enemy_02',
            149 : 'enemy_03',
            150 : 'enemy_04',
            151 : 'enemy_05',
            152 : 'enemy_06',
            153 : 'enemy_07',
            154 : 'enemy_08',
            155 : 'enemy_09',
            156 : 'enemy_10',
            157 : 'enemy_11',
            158 : 'enemy_12',
            159 : 'enemy_13',
            160 : 'enemy_14',
            161 : 'enemy_15',
            162 : 'enemy_16',
            163 : 'enemy_17',
            164 : 'enemy_18',
            165 : 'enemy_19',
            166 : 'enemy_20',
            167 : 'enemy_21',
            168 : 'enemy_22',
            169 : 'enemy_23',
            170 : 'enemy_24',
            171 : 'enemy_25',
            172 : 'enemy_26',
            173 : 'enemy_27',
            174 : 'enemy_28',
            175 : 'enemy_29',
            176 : 'enemy_30',
            177 : 'enemy_31',
            178 : 'enemy_32',
            179 : 'enemy_33'
        },
        //初始对话索引
        dialog_index : {
            "angle" : {
                "dialog_index" : 1
            },
            "shop_m_l" : {
                "dialog_index" : 1
            },
            "shop_m_h" : {
                "dialog_index" : 1
            },
            "shop_key_sell" : {
                "dialog_index" : 1
            },
            "shop_key_buy" : {
                "dialog_index" : 1
            },
            "smlr_03" : {
                "dialog_index" : 1
            },
            "sr_03" : {
                "dialog_index" : 1
            },
            "smlr_16" : {
                "dialog_index" : 1
            },
            "sr_16" : {
                "dialog_index" : 1
            },
            "jack" : {
                "dialog_index" : 1
            },
            "shop_e_l" : {
                "dialog_index" : 1
            },
            "shop_e_h" : {
                "dialog_index" : 1
            }
        }
    };
});