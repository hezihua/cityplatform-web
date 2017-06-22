$(function(){
	$.ajax({
        url:"cityplat_web/stakeGroup/getStakeGroupStatisticsInfo.do",
            type:'post',
            data:{},
            dataType:'json',
            success:function(res){
                  if(res.requestCode == 0){
                    var data = res.data;
                    for(var pro in data){
                    	var idName = "#"+pro;
                    	$(idName).text(data[pro]);
                    }
                  }
              }
        })

        //加载首页的四条咨询信息（政策4，咨询3）
        $.ajax({
        	url:"cityplat_web/policyinfo/getHomePolicyList.do",
            type:'post',
            data:{types:"4,3",num:"4"},
            dataType:'json',
            success:function(res){
                  if(res.requestCode == 0){
                    var data = res.data;
                    createHtmlDemo(data[3],"newNews");
                    createHtmlDemo(data[4],"newPolicy");
                  }
              }
        })
        function createHtmlDemo(item,className){
			if(item != null && item != "" && item.length > 0){
				var left = '';
				var right = '<div class="right">';
				for(var i=0;i<item.length;i++){
					if(i == 0){
						left += '<figure onclick="openLink(\''+item[i].linkAddr+'\','+item[i].infoType+')" class="left"><img style="width:500px;height:320px" src="';
						left += item[i].infoImgFile + '" alt="" /><figcaption><div>';
						left += item[i].title + '<span>';
						left += item[i].releaseTimeStr + '</span></div></figcaption></figure>';
					}else{
						right += '<figure  onclick="openLink(\''+item[i].linkAddr+'\','+item[i].infoType+')"><img style="width:210px;height:140px" src="'+item[i].infoImgFile+'" alt="" /><figcaption><div>';
						right += item[i].title+'</div><div>';
						right += item[i].infoProfile+'</div><div>';
						right += item[i].releaseTimeStr+'</div></figcaption></figure>';
					}
				}
				right += '</div>';
				
			}
			var classN = "."+className;
			$(classN).html(left+right);
		}
	
        
});
function openLink(url,item){
	localStorage.setItem("policy",item-1);
    window.open(url,'_blank'); //在新的空白页面打开
  }