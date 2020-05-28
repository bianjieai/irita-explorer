<template>
	<div class="header_container">
		<div class="header_content">
			<div class="header_logo_img_content">
				<router-link :to="`/home`">
					<img src="../assets/IRITA_logo.png" alt="">
				</router-link>
			</div>
			<div class="header_menu">
				<el-menu
						:default-active="activeIndex2"
						class="el-menu-demo"
						mode="horizontal"
						@select="handleSelect"
						background-color="#3264FD"
						text-color="#fff"
						active-text-color="#fff">
					<el-submenu index="1">
						<template slot="title">Blockchain</template>
						<el-menu-item index="2-1">
							<router-link :to="`/home`">Overview</router-link>
						</el-menu-item>
						<el-menu-item index="2-2">
							<router-link :to="`/blocks`">Blocks</router-link>
						</el-menu-item>
						<el-menu-item index="2-3">
							<router-link :to="`/txs`">Transactions</router-link>
						</el-menu-item>
					</el-submenu>
					<el-menu-item index="2">
						<router-link :to="`/validators`">Validators</router-link>
					</el-menu-item>
					<el-menu-item index="3">
						<router-link :to="`/nftAsset`">NFT Asset</router-link>
					</el-menu-item>
					<el-menu-item index="4">
						<router-link :to="`/services`">Service</router-link>
					</el-menu-item>
				</el-menu>
			</div>
			<div class="header_input_content">
				<div class="search_input_container">
					<div class="search_input_wrap">
						<input type="text"
						       class="search_input"
						       placeholder="Search by Address / Txhash / Block"
						       v-model.trim="searchInputValue"
						       @keyup.enter="onInputChange">
						<span @click="getData(searchInputValue)" class="iconfont iconsousuo"></span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import Tools from "../util/Tools"
	import Service from "../service"
	export default {
		data() {
			return {
				activeIndex: '1',
				activeIndex2: '1',
				searchInputValue: '',
			};
		},
		mounted(){
			this.$Crypto.getCrypto('iris', 'testnet');
		},
		methods: {
			handleSelect(key, keyPath) {
			},
			onInputChange () {
				this.getData()
			},
			clearSearchContent () {
				this.searchInputValue = '';
			},
			getData(){
				if (Tools.removeAllSpace(this.searchInputValue) === '') {
					this.clearSearchContent();
					return
				} else {
					if (/^[A-F0-9]{64}$/.test(this.searchInputValue)) {
						this.searchTx();
					} else if (this.$Codec.Bech32.isBech32(this.$Crypto.config.iris.bech32.accAddr, this.searchInputValue)) {
						this.searchDelegator();
					} else if (this.$Codec.Bech32.isBech32(this.$Crypto.config.iris.bech32.valAddr, this.searchInputValue)) {
						this.searchDelegator();
					} else if (/^\+?[1-9][0-9]*$/.test(this.searchInputValue)) {
						this.searchBlock();
					} else {
						this.toSearchResultPage();
					}
				}
			},
			searchBlock(){
				Service.commonInterface({blockInformation:{height:this.searchInputValue}},(blockInformation) => {
					try {
						if(blockInformation&&blockInformation.length > 0){
							this.$router.push(`/block/${this.searchInputValue}`);
							this.clearSearchContent();
						}else {
							this.toSearchResultPage();
						}
						
					}catch (e) {
						console.error(e)
						this.toSearchResultPage();
					}
					
				})
			},
			searchDelegator () {
				Service.commonInterface({ownerDetail:{ownerAddress:this.searchInputValue}}, (delegatorAddress) => {
					try {
						if (delegatorAddress) {
							let url = `/address/${this.searchInputValue}`;
							this.$router.push(url);
							this.clearSearchContent();
						} else {
							this.toSearchResultPage()
						}
					}catch (e) {
						console.error(e);
						this.toSearchResultPage();
					}
				});
			},
			searchTx () {
				Service.commonInterface({getTransactionInformation:{hash: this.searchInputValue}}, (tx) => {
					try {
						if (tx) {
							this.$router.push(`/tx?txHash=${this.searchInputValue}`);
							this.clearSearchContent();
						} else {
							this.toSearchResultPage();
						}
					}catch (e) {
						console.error(e);
						this.toSearchResultPage();
					}
				});
			},
			toSearchResultPage () {
				this.$router.push(`/searchResult?${this.searchInputValue}`);
				this.searchInputValue = "";
			},
		}
	}
</script>

<style scoped lang="scss">
	.header_container{
		background: #3264FD;
		position: fixed;
		top:0;
		width: 100%;
		z-index: 10;
		height: 0.6rem;
		.header_content{
			width: 100%;
			max-width: 12rem;
			margin: 0 auto;
			display: flex;
			align-items: center;
			justify-content: space-between;
			.header_logo_img_content{
				padding-right: 0.2rem;
				img{
					height: 0.24rem
				}
			}
			.el-menu-demo{
				width: 100%;
				background: #3264FD;
			}
			.header_input_content{
				flex: 1;
				background: #3264FD;
				.search_input_container {
					flex: 1;
					background: #3264fd;
					z-index: 1;
					.search_input_wrap {
						max-width: 12.8rem;
						margin: 0 auto;
						padding: 0.1rem 0 0.1rem 0.2rem;
						display: flex;
						align-items: center;
						input {
							width: 100%;
							height: 0.33rem;
							border-radius: 0.06rem 0 0 0.06rem;
							box-shadow: none;
							background: #3264fd;
							border: 0.01rem solid rgba(255,255,255,0.5);
							color: #fff;
							font-size: 0.14rem;
							border-right: none;
							text-indent: 0.1rem;
						}
						input::placeholder{
							font-size: 0.14rem;
							color:rgba(255,255,255,0.5);
						}
						span {
							right: 0.3rem;
							height:0.35rem;
							font-size: 0.2rem;
							padding: 0 0.1rem;
							line-height: 0.33rem;
							color: rgba(255,255,255,0.5);
							border-top: 0.01rem solid rgba(255,255,255,0.5);
							border-right: 0.01rem solid rgba(255,255,255,0.5);
							border-bottom: 0.01rem solid rgba(255,255,255,0.5);
							background: #3264fd;
							border-radius: 0 0.06rem 0.06rem 0;
							cursor: pointer;
						}
					}
				}
			}
		}
	}

	
</style>
