<template>
	<div class="validator_list_container">
		<div class="validator_list_content_wrap">
			<div class="validator_tab_content">
				<m-tabs :data="validatorStatusTitleList" :chose="selectValidatorStatus"></m-tabs>
			</div>
			<div class="validator_table_list_content">
				<el-table :data="validatorList">
					<el-table-column label="#" prop="index"></el-table-column>
					<el-table-column label="Moniker" prop="moniker"></el-table-column>
					<el-table-column label="Operator">
						<template slot-scope="scope">
							<el-tooltip :content="scope.row.operator"
							            placement="top"
							            effect="dark">
								<span>{{formatAddress(scope.row.operator)}}</span>
							</el-tooltip>
						</template>
					</el-table-column>
					<el-table-column label="Website" prop="website"></el-table-column>
					<el-table-column label="Identity" prop="identity"></el-table-column>
					<el-table-column label="Details" prop="detail"></el-table-column>
				</el-table>
			</div>
		</div>
	</div>
</template>

<script>
	import Service from "../service"
	import Tools from "../util/Tools"
	import MTabs from "./MTabs";
	export default {
		name: "ValidatorList",
		components: {MTabs},
		data(){
			return {
				pageNumber:1,
				pageSize: 100,
				validatorList: [],
				status:'bonded',
				validatorStatusTitleList:[
					{
						title:'Active',
						isActive: true,
					},
					{
						title:'Candidate',
						isActive: false,
					},
					{
						title:'Jailed',
						isActive: false,
					}
				]
			}
		},
		mounted () {
			this.getValidatorList();
		},
		methods:{
			selectValidatorStatus(index){
				index = index || 0;
				this.validatorStatusTitleList.forEach( item => {
					item.isActive = false
				});
				// localStorage.setItem('validatorTabIndex',index);
				this.validatorStatusTitleList[index].isActive = true;
				this.getValidatorStatus(index);
				this.getValidatorList()
			},
			getValidatorStatus(index){
				let validatorStatus;
				switch (index) {
					case 0 :
						this.status = 'bonded';
						break;
					case 1 :
						this.status = 'unbonding';
						break;
					case 2 :
						this.status = 'unbonded'
				}
				return validatorStatus
			},
			getValidatorList(){
				Service.commonInterface({validatorList:{
						status: this.status,
						pageNum: this.pageNumber,
						pageSize: this.pageSize
					}},(res) => {
					try {
						if(res.length > 0){
							this.validatorList = res[0].result.map((item,index) => {
								return {
									index:index + 1,
									// moniker: item.description.moniker,
									operator: item.validators[0].address,
									// website: item.description.website ? item.description.website : '--',
									// identity: item.description.identity ? item.description.identity : '--',
									// detail: item.description.detail ? item.description.detail : '--',
								}
							})
							
						}else {
							this.validatorList = []
						}
					}catch (e) {
						console.error(e)
					}
				})
			},
			formatAddress(address){
				return Tools.formatValidatorAddress(address)
			},
		}
	}
</script>

<style scoped lang="scss">
	a{
		color: #3264FD !important;
	}
	.validator_list_container{
		.validator_list_content_wrap{
			max-width: 12rem;
			margin: 0 auto;
			.validator_table_list_content{
				background: #fff;
				margin-top: 0.1rem;
			}
		}
	}
</style>
