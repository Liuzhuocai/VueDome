<template>
    <div style="overflow: auto;" class="body">
        <div class="container container-write">
            <div class="titleContainer">
                <div class="titleLeft pageTitle">修改记录</div>
                <div class="titleRight">
                    <span class="btn complete" v-on:click="complete()"><b>完成</b></span>
                    <span class="btn" v-on:click="$router.back()">返回</span>
                </div>
            </div>
            <div class="content">
                <div class="textareaTitle">
                    <div class="gray-text attr " style="margin-top: 10px">修改原因</div>
                    <textarea ref="modifyReason" name="modifyReason"
                              placeholder="请输入" class="input" cols="3"
                              v-model=" userData.modifyReason" maxlength="200"
                              v-on:blur="updateTipsFlag(modifyReasonFlag)">
                        </textarea>
                </div>
                <div class="tips" v-if="updateTips(modifyReasonFlag)">该项未填写</div>
                <div class="horContext">
                    <div class="leftContent">
                        <div class="inputContainer">
                            <div class="gray-text attr">行政区划</div>
                            <select v-model="userData.regionalism" style="padding-left: 7px"
                                    name="regionalism"
                                    class="input one-line"
                                    v-on:blur="updateTipsFlag(regionalismFlag)">
                                <option value='' disabled selected style='display:none;'>请选择
                                </option>
                                <option v-for="item in cityList" :key="item.code"
                                        v-bind:value="item.city" v-text="item.city"></option>
                            </select>
                            <!--<input ref="regionalism"  name="regionalism"
                                   placeholder="请选择" class="input one-line "
                                   v-model="userData.regionalism" maxlength="20">-->

                        </div>
                        <div class="tips" v-if="updateTips(regionalismFlag)">该项未填写</div>
                        <div class="inputContainer">
                            <div class="gray-text attr">学校名称</div>
                            <input ref="school" name="school"
                                   placeholder="请输入" class="input one-line "
                                   v-model="userData.school" maxlength="20"
                                   v-on:blur="updateTipsFlag(schoolFlag)">
                        </div>
                        <div class="tips" v-if="updateTips(schoolFlag)">该项未填写</div>
                        <div class="inputContainer">
                            <div class="gray-text attr">姓名</div>
                            <input ref="name" name="name"
                                   placeholder="请输入" class="input one-line "
                                   v-model="userData.name" maxlength="20"
                                   v-on:blur="updateTipsFlag(nameFlag)">
                        </div>
                        <div class="tips" v-if="updateTips(nameFlag)">该项未填写</div>
                        <div class="inputContainer">
                            <div class="gray-text attr">性别</div>
                            <input ref="gender" value="男" name="gender"
                                   type="radio"
                                   class="radio"
                                   v-model="userData.gender" @blur="updateTipsFlag(genderFlag)">
                            <span class="gray-text radio-text">男</span>
                            <input ref="gender" value="女" name="gender"
                                   type="radio"
                                   class="radio"
                                   v-model="userData.gender" style="margin-left: 20px"
                                   v-on:blur="updateTipsFlag(genderFlag)">
                            <span class="gray-text radio-text">女</span>
                        </div>

                        <div class="tips" v-if="updateTips(genderFlag)">该项未填写</div>
                        <div class="inputContainer">
                            <div class="gray-text attr">身份证号码</div>
                            <input ref="identityCard" name="identityCard"
                                   placeholder="请输入" class="input one-line "
                                   v-model="userData.identityCard" maxlength="20"
                                   v-on:blur="updateTipsFlag(identityCardFlag)">
                        </div>
                        <div class="tips" v-if="updateTips(identityCardFlag)">该项未填写</div>
                        <div class="inputContainer">
                            <div class="gray-text attr">政治面貌</div>
                            <select v-model="userData.politicsStatus" style="padding-left: 7px"
                                    name="politicsStatus"
                                    class="input one-line"


                                    v-on:blur="updateTipsFlag(politicsStatusFlag)">
                                <option value='' disabled selected style='display:none;'>请选择
                                </option>
                                <option v-for="item in politicsStatus" :key="item.code"
                                        v-bind:value="item.status" v-text="item.status"></option>
                            </select>

                            <!-- <input ref="politicsStatus"
                                    name="politicsStatus"
                                    placeholder="请选择" class="input one-line "
                                    v-model="userData.politicsStatus" maxlength="20">-->
                        </div>
                        <div class="tips" v-if="updateTips(politicsStatusFlag)">该项未填写</div>
                        <div class="inputContainer">
                            <div class="gray-text attr">职务职称</div>
                            <input ref="duty" name="duty"
                                   placeholder="请输入" class="input one-line "
                                   v-model="userData.duty" maxlength="20"
                                   v-on:blur="updateTipsFlag(dutyFlag)">
                        </div>
                        <div class="tips" v-if="updateTips(dutyFlag)">该项未填写</div>

                    </div>
                    <div style="width:1px;flex-shrink:0;background:#ededf0;"></div>
                    <div class="rightContent">
                        <div class="textareaTitle">
                            <div class="gray-text attrRight "
                                 style="margin-top: 10px;line-height: 20px">失范内容<br>{{userData.contentText.length}}/200
                            </div>
                            <textarea ref="contentText"
                                      name="contentText"
                                      placeholder="请输入" class="input" cols="5" style="height: 176px"
                                      v-model="userData.contentText" maxlength="200"
                                      v-on:blur="updateTipsFlag(contentTextFlag)">
                        </textarea>
                        </div>
                        <div class="tips" style="margin-left: 80px"
                             v-if="input_status&modifyReasonFlag">该项未填写
                        </div>
                        <div class="textareaTitle">
                            <div class="gray-text attrRight "
                                 style="margin-top: 10px;line-height: 20px">处理文件<br>{{userData.files.length}}}/10
                            </div>

                            <div class="cardContainer">
                                <div v-for="file in userData.files" :key="file.id"
                                     class="itemCard">
                                    <img :src="getIcon(file.fileDetail.fileType)" class="itemImg"
                                         alt="加载失败" >
                                    <div class="cardTextContainer">
                                        <div style="color: #313131;font-size: 14px;height: 48px;line-height: 24px;overflow: hidden">
                                            {{file.fileDetail.fileName}}
                                        </div>
                                        <div style="display: flex;justify-content: space-between;align-items: center">
                                            <span style="color: #CFD0D0;font-size: 12px;">{{file.fileDetail.fileLenght}}</span>
                                            <span class="delete">删除</span>
                                        </div>
                                        <!--   <div style="color: #CFD0D0;font-size: 12px;line-height: 18px;">
                                               单个文件最大100mb<br>最多上传10个文件
                                           </div>-->
                                    </div>
                                </div>

                                <div class="uploadCard" v-on:click="addFile">
                                    <input type="file" name="file" v-show="false"
                                           v-on:change="uploadBefore" ref="add_file_btn">
                                    <i class="upload_plus"></i>
                                    <div class="cardTextContainer">

                                        <div style="color: #1682F2;font-size: 14px">点击上传处理文件</div>

                                        <div style="color: #CFD0D0;font-size: 12px;line-height: 18px;margin-top: 20px">
                                            单个文件最大100mb<br>最多上传10个文件
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    </div>
</template>

<script>
    export default {

        name: "ItemDetail",
        data() {
            return {
                userData: {
                    id: 0,
                    modifyReason: "",
                    regionalism: "",
                    school: "",
                    name: "",
                    gender: "",
                    identityCard: "",
                    politicsStatus: "",
                    duty: "",
                    contentText: "",
                    files: [/*{
                        fileDetail: {
                            fileName: "关于汪汪老师的处理意见.pdf",
                            fileType: "pdf",
                            fileLenght: "237kb",
                            fileHash: 0
                        }
                    }*/]
                },
                filesData :{}
                ,
                cityList: [
                    {code: 1, city: "成都"}, {code: 2, city: "自贡"}
                ],
                politicsStatus: [
                    {code: 1, status: "党员"}, {code: 2, status: "群众"}
                ],
                input_status: 0x0000000000000000,

                modifyReasonFlag: 0x1,
                regionalismFlag: 0x1 << 1,
                schoolFlag: 0x1 << 2,
                nameFlag: 0x1 << 3,
                genderFlag: 0x1 << 4,
                identityCardFlag: 0x1 << 5,
                politicsStatusFlag: 0x1 << 6,
                dutyFlag: 0x1 << 7,
                contentTextFlag: 0x1 << 8,


            };
        },
        methods: {
            updateTipsFlag(flag) {
                let verity = false;

                switch (flag) {
                    case this.modifyReasonFlag:
                        if (this.userData.modifyReason.length > 0) {
                            verity = true;
                        }


                        break;
                    case this.regionalismFlag:
                        if (this.userData.regionalism.length > 0) {
                            verity = true;
                        }
                        break;
                    case this.schoolFlag:
                        if (this.userData.school.length > 0) {
                            verity = true;
                        }
                        break;
                    case this.nameFlag:
                        if (this.userData.name.length > 0) {
                            verity = true;
                        }
                        break;
                    case this.genderFlag:
                        if (this.userData.gender.length > 0) {
                            verity = true;
                        }
                        break;
                    case this.identityCardFlag:
                        if (this.userData.identityCard.length > 0) {
                            verity = true;
                        }
                        break;
                    case this.politicsStatusFlag:
                        if (this.userData.politicsStatus.length > 0) {
                            verity = true;
                        }
                        break;
                    case this.dutyFlag:
                        if (this.userData.duty.length > 0) {
                            verity = true;
                        }
                        break;
                    case this.contentTextFlag:
                        if (this.userData.contentText.length > 0) {
                            verity = true;
                        }
                        break
                    default:
                }
                // console.log("  ,input_status=" + this.input_status)
                if (verity) {
                    if (this.input_status === (this.input_status | flag)) {
                        // this.input_status = (~this.input_status)^(~flag)
                        this.input_status -= flag
                    }
                    //this.input_status ^= flag
                } else {
                    this.input_status |= flag
                }
                // console.log("verity=" + verity + "   ,flag=" + flag + "  ,input_status=" + this.input_status)
            },
            updateTips(flag) {
                return this.input_status === (this.input_status | flag)
            }
            ,
            addFile() {
                this.$refs.add_file_btn.click()
            }
            ,
            complete() {
                let arr = []
                arr.push(this.modifyReasonFlag,
                    this.regionalismFlag,
                    this.schoolFlag,
                    this.nameFlag,
                    this.genderFlag,
                    this.identityCardFlag,
                    this.politicsStatusFlag,
                    this.dutyFlag,
                    this.contentTextFlag,
                )
                arr.forEach(
                    value => this.updateTipsFlag(value)
                )
                if (this.input_status === 0) {
                    console.log(JSON.stringify(this.userData))
                }
            },
            uploadBefore() {
                console.log(222)
                if (this.userData.files.length > 9) {
                    alert("最多上传10个附件")
                    return
                }
                let formData = new FormData()
                formData = new window.FormData()
                formData.append('file', document.querySelector('input[type=file]').files[0])
                let file = document.querySelector('input[type=file]').files[0]
               /* this.filesData.forEach(
                    it =>console.log(it)
                )*/
               /* if( this.filesData[file.lastModified]){
                    console.log('上传文件重复，请检查')
                    alert('上传文件重复，请检查');
                    return;
                }*/
                console.log(file)


                let fileName = file.name.substring(file.name.lastIndexOf(".") + 1, file.name.length)
                const fileType = fileName === 'xls' || fileName === 'xlsx' || fileName === 'ppt' || fileName === 'pptx' || fileName === 'doc' || fileName === 'docx' || fileName === 'txt' || fileName === 'pdf' || fileName === 'zip' || fileName === 'rar';

                if (!fileType) {
                    alert('上传文件格式不正确，请检查');


                } else {
                    console.log("file.length=" + file.length)

                    this.userData.files.push({
                        fileDetail: {
                            fileName: file.name,
                            fileType: fileName,
                            fileLenght: this.renderSize(file.length),
                            fileHash: file.hash
                        }

                    })

                    this.$set(this.filesData,file.lastModified,{ fileLastModified: file.lastModified})
                }
            },
            renderSize(filesize) {
                if (null == filesize || filesize === '') {
                    return "0 KB";
                }
                let unitArr = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
                let index = 0;
                let srcsize = parseFloat(filesize);
                index = Math.floor(Math.log(srcsize) / Math.log(1024));
                let size = srcsize / Math.pow(1024, index);
                size = size.toFixed(2);//保留的小数位数
                return size + unitArr[index];
            }
            ,
            getIcon(type) {
                console.log(type)
                switch (type) {
                    case "pdf":
                        return require("../../imgs/attach_pdf_icon.png")
                    case "excel":
                    case "xlsx":
                        return require("../../imgs/attach_excel_icon.png")
                    case "pptx":
                    case "ppt":
                        return require("../../imgs/attach_PPT_icon.png")
                    case "doc":
                    case "docx":
                        return require("../../imgs/attach_word_icon.png")
                    case "zip":
                        return require("../../imgs/attach_zip_icon.png")
                    default:
                        return require("../../imgs/attach_other_file_icon.png")
                }

            }

        }

    }
</script>

<style lang="less" scoped>

    .titleContainer {
        display: flex;
        text-align: start;
        height: 90px;
        align-items: center;
        box-shadow: 0px 1px 0px 0px #EFEFF0;

        .titleLeft {
            flex: auto;
        }

        .titleRight {
            flex: auto;
            display: flex;
            justify-content: flex-end;

            .btn {
                display: flex;
                height: 32px;
                width: 50px;
                color: #0280FD;
                font-size: 14px;
                background-color: #ECF4FD;
                border-radius: 5px;
                margin-left: 10px;
                align-items: center;
                justify-content: center;
            }
            /*.btn+.btn{*/
            /*    margin-left: 10px;*/
            /*}*/
            .complete {
                color: #D7E9FA;
                background-color: #0482FE;
            }
        }
    }

    .inputContainer {
        margin-top: 17px;
        display: flex;
        align-items: center;
        /*&:first-child{*/
        /*    margin-top: 0;*/
        /*}*/

    }

    /*.inputContainer + .inputContainer{*/
    /*    margin-top: 17px;*/
    /*}*/


    .gray-text {
        font-size: 14px;
        color: #7D7D7E;
    }

    .content {
        padding: 10px 30px 25px;
    }

    .attr {
        text-align: start;
        width: 100px;
    }

    .attrRight {
        text-align: start;
        width: 80px;
    }

    .input {
        flex-grow: 1;
        height: 95px;
        border: 1px solid #D8D8D8;
        outline: none;
        line-height: 30px;
        resize: none;
        padding: 0 10px;
        font-size: 14px;
        color: #313131;
        border-radius: 5px;
        box-sizing: border-box;

        input::-moz-placeholder {
            font-size: 12px;
        }

        &:focus {
            border-color: #0482FE;
        }

    }

    .one-line {
        padding: 0 10px;
        height: 36px;
        width: 230px;
    }

    .tips {
        text-align: start;
        font-size: 12px;
        color: #E63A3E;
        margin-left: 100px;
    }

    .horContext {
        margin-top: 35px;
        display: flex;

    }

    .radio {
        font-size: 12px;
        color: #7D7D7E;
        height: 36px;
    }

    .radio-text {
        font-size: 12px;
        margin-left: 3px;
    }

    .leftContent {
        flex: 0 0 auto;
        padding-right: 30px;
    }

    .rightContent {
        flex-grow: 1;
        padding-left: 30px;
    }

    .textareaTitle {
        align-items: start;
        margin-top: 15px;
        display: flex;
    }

    .cardContainer {
        flex-grow: 1;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        .uploadCard {
            padding: 15px;
            display: flex;
            box-sizing: border-box;
            width: 300px;
            height: 106px;
            border: 1px dashed #1682F2;
            align-items: center;

        }

        .itemCard {
            margin-bottom: 10px;
            padding: 15px;
            display: flex;
            box-sizing: border-box;
            width: 300px;
            height: 106px;
            background: white;
            align-items: center;
            box-shadow: 1px 1px 1px 1px #EFEFF0;
        }

        .upload_plus {
            flex-shrink: 0;
            width: 80px;
            height: 80px;
            background-image: url(../../imgs/attch_+_icon.png);
            background-color: #F5F5F5;
            border-radius: 6px;
            background-repeat: no-repeat;
            background-position: center center;
        }

        .cardTextContainer {
            box-sizing: border-box;
            height: 106px;
            padding: 20px 10px 20px;
            flex-grow: 1;
            text-align: start;
        }

        .itemImg {
            flex-shrink: 0;
            height: 80px;

        }
    }

    .delete {

        text-align: center;
        line-height: 32px;
        width: 50px;
        font-size: 14px;
        border-radius: 5px;
        margin-left: 10px;
        color: #B06B66;
        background-color: #F7F2F1;

    }


</style>