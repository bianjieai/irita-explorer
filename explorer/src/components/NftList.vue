<template>
	<div class="nft_list_container">
		<div class="nft_list_content_wrap">
			<div class="nft_list_header_content">
				<h3 class="nft_list_header_title">{{allCount}} Assets</h3>
				<el-select v-model="value" :change="filterTokenIdByDenom(value)">
					<el-option v-for="(item, index) in nftList"
							   :key="index"
							   :label="item.label"
							   :value="item.value"></el-option>
				</el-select>
				<el-input v-model="input" placeholder="Search by Owner"></el-input>
				<div class="tx_type_mobile_content">
					<div class="search_btn" @click="getNftsByFilter">Search</div>
					<div class="reset_btn" @click="resetFilterCondition"><i class="iconfont iconzhongzhi"></i></div>
				</div>
			</div>
			<div class="nef_list_table_container">
				<el-table :data="denomArray">
					<el-table-column label="Owner" width="150px">
						<template slot-scope="scope">
							<el-tooltip :content="scope.row.owner"
										class="item"
										placement="top"
										effect="dark">
								<router-link :to="`/address/${scope.row.owner}`">{{formatAddress(scope.row.owner)}}</router-link>
							</el-tooltip>
						</template>
					</el-table-column>
					<el-table-column label="Denom" width="150px">
						<template slot-scope="scope">
							<router-link :to="`/nft/token?denom=${scope.row.denom}&&tokenId=${scope.row.tokenId}`">{{scope.row.denom}}</router-link>
						</template>
					</el-table-column>
				<!--	<el-table-column label="Token ID" width="300px">
						<template slot-scope="scope">
							<router-link :to="`/nft/token?denom=${scope.row.denom}&&tokenId=${scope.row.tokenId}`">{{scope.row.tokenId}}</router-link>
						</template>
					</el-table-column>-->
					<el-table-column label="URI" prop="token_uri">
						<template slot-scope="scope">
							<a v-if="scope.row.schema" :download="scope.row.schema" :href="scope.row.schema" target="_blank">{{scope.row.schema}}</a>
							<span v-else>--</span>
						</template>
					</el-table-column>
				</el-table>
			</div>
			<div class="pagination_content">
				<keep-alive>
					<m-pagination :page-size="pageSize"
								  :total="allCount"
								  :page="currentPageNum"
								  :page-change="pageChange">
					</m-pagination>
				</keep-alive>
			</div>
		</div>
	</div>
</template>

<script>
	import Server from "../service"
	import Tools from "../util/Tools";
	import MPagination from "./MPagination";
	export default {
		name: "NftList",
		components: {MPagination},
		data () {
			return {
				nftList: [
					{
						value:'all',
						label:'All',
					}
				],
				denomArray:[],
				value:'all',
				denom: "",
				currentPageNum: 1,
				pageSize: 20,
				tokenId: '',
				owner: '',
				input:'',
				allCount:0
			}
		},
		mounted(){
			this.getNftList();
			this.getNftsByFilter()
		},
		methods:{
			filterTokenIdByDenom(value){
				if(value === 'all'){
					this.denom = ''
				}else {
					this.denom = value;
				}
			},
			resetFilterCondition(){
				this.input = '';
				this.denom = 'All';
				this.value = 'all';
				this.currentPageNum = 1;
				this.tokenId = '';
				this.owner = '';
				this.getNftsByFilter()
			},
			pageChange(pageNum){
				this.currentPageNum = pageNum;
				this.getNftsByFilter()
			},
			getNftsByFilter(){
				if (this.$Codec.Bech32.isBech32(this.$Crypto.config.iris.bech32.accAddr, this.input)) {
					this.owner = this.input
				} else if (this.$Codec.Bech32.isBech32(this.$Crypto.config.iris.bech32.valAddr, this.input)) {
					this.owner = this.input
				}
				if(!this.owner){
					this.tokenId =  this.input
				}
				Server.commonInterface({denomInformation:{
						denom: this.denom === 'All' ? '' : this.denom,
						pageNum: this.currentPageNum,
						pageSize: this.pageSize,
						owner: this.owner,
					}},(res) => {
					try {
						if(res){
							res.data.forEach(item => {
								if(item.tokenUri.includes('$schema')){
									item.schema = JSON.parse(item.tokenUri).$id
								}else {
									item.schema =  item.tokenUri
								}
								
							})
							this.allCount = res.count
							this.denomArray = res.data;
						}else {
							this.allCount = 0
							this.denomArray = []
						}
					}catch (e) {
						console.error(e)
					}
				})
			},
			formatAddress(address){
				return Tools.formatValidatorAddress(address)
			},
			getNftList(){
				Server.commonInterface({nftList:{}},(res) =>{
					try {
						if(res){
							let nftList = res.map(item => {
								return {
									label: item,
									value: item
								}
							})
							this.nftList = this.nftList.concat(nftList)
						}
					}catch (e) {
						console.error(e)
					}
				})
			},
		}
	}
</script>

<style scoped lang="scss">
	a{
		color: #3264FD !important;
	}
	.nft_list_container{
		.nft_list_content_wrap{
			max-width: 12rem;
			margin: 0 auto;
			width: 100%;
			.nft_list_header_content{
				width: 100%;
				margin: 0.3rem 0 0 0;
				display: flex;
				align-items: center;
				.el-select{
					/deep/ .el-input{
						width: 1.8rem;
						.el-input__inner{
							padding-left: 0.07rem;
							height: 0.32rem;
							font-size: 0.14rem !important;
							line-height: 0.32rem;
							&::-webkit-input-placeholder{
								font-size: 0.14rem !important;
							}
						}
						.el-input__inner:focus{
							border-color: #3264FD !important;
						}
						.el-input__suffix{
							.el-input__suffix-inner{
								.el-input__icon{
									line-height: 0.32rem;
								}
							}
						}
					}
				}

				/deep/ .el-input{
					max-width: 3.5rem;
					margin-left: 0.1rem;
					.el-input__inner{
						padding-left: 0.07rem;
						height: 0.32rem;
						font-size: 0.14rem !important;
						line-height: 0.32rem;
						&::-webkit-input-placeholder{
							font-size: 0.14rem !important;
						}
					}
				}
				.nft_list_header_title{
					font-size: 0.18rem;
					color: #22252A;
					line-height: 0.21rem;
					text-align: left;
					text-indent: 0.2rem;
				}
				.nft_denom_content{
					margin-top: 0.1rem;
					width: 100%;
					height:0.5rem;
					line-height: 0.5rem;
					font-size: 0.14rem;
					color:#787C99;
					text-align: left;
					background: #fff;
					text-indent: 0.2rem;
				}
				.tx_type_mobile_content{
					display: flex;
					align-items: center;

					/deep/.el-select{
						width: 1.3rem;
						margin-right: 0.1rem;
						.el-input{
							.el-input__inner{
								padding-left: 0.07rem;
								height: 0.32rem;
								font-size: 0.14rem !important;
								line-height: 0.32rem;
								&::-webkit-input-placeholder{
									font-size: 0.14rem !important;
								}
							}
							.el-input__inner:focus{
								border-color: #3264FD !important;
							}
							.el-input__suffix{
								.el-input__suffix-inner{
									.el-input__icon{
										line-height: 0.32rem;
									}
								}
							}
						}
						.is-focus{
							.el-input__inner{
								border-color: #3264FD !important;
							}
						}

					}
					/deep/.el-date-editor{
						width: 1.3rem;
						.el-icon-circle-close{
							display: none !important;
						}
						.el-input__inner{
							height:0.32rem;
							padding-left: 0.07rem;
							padding-right: 0;
							line-height: 0.32rem;
							&::-webkit-input-placeholder{
								font-size: 0.14rem !important;
							}
							&:focus{
								border-color: #3264FD;
							}
						}
						.el-input__prefix{
							right: 5px;
							left: 1rem;
							.el-input__icon{
								line-height: 0.32rem;
							}
						}
					}
					.joint_mark{
						margin: 0 0.08rem;
					}
					.reset_btn{
						background: #3264FD;
						color: #fff;
						border-radius: 0.04rem;
						margin-left: 0.1rem;
						cursor: pointer;
						i{
							padding: 0.08rem;
							font-size: 0.14rem;
							line-height: 1;
							display: inline-block;
						}
					}
					.search_btn{
						cursor: pointer;
						background: #3264FD;
						margin-left: 0.1rem;
						color: #fff;
						border-radius: 0.04rem;
						padding: 0.05rem 0.18rem;
						font-size: 0.14rem;
						line-height: 0.2rem;
					}
				}
			}
			.nef_list_table_container{
				margin-top: 0.05rem;
			}
			.pagination_content{
				display: flex;
				justify-content: flex-end;
				margin: 0.1rem 0 0.2rem 0;
			}
			/*.nft_denom_content{
				width: 100%;
				.nft_denom_list_item{
					width: 100%;
					text-align: left;
					background: #fff;
					text-indent: 0.2rem;
					margin-top: 0.1rem;
					padding: 0.2rem 0;
					.nft_denom_title{
						display: flex;
						justify-content: space-between;
						align-items: center;
						box-sizing: border-box;
						padding-right: 0.2rem;
						.select_content{
							padding-top: 0.1rem;
							transform: rotate(-90deg);
							i{
								padding-right: 0.08rem;
							}
						}
						.show_bottom_select{
							transform: rotate(0deg);
						}
					}
				}
				.nft_denom_list_content{
					box-sizing: border-box;
					padding: 0.2rem;
					margin-top: 0.4rem;
					/deep/ .el-table th {
						background: #fafaff !important;
					}
					/deep/ .el-table tr {
						background: #fafaff !important;
					}
				}
				.hidden_footer_padding{
					padding-bottom: 0;
				}
			}*/
			
		}
	}
</style>
