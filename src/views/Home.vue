<template>
  <div class="home">
    <div class="banner">
      <img alt="Vue logo" style="width: 64px; height: 64px" src="../assets/logo.png" />
      <h3 style="margin-top: 1rem">Welcome to Your Vue.js App</h3>
    </div>

    <br />

    <h2># Trend 组件</h2>

    <a-divider> 正常 </a-divider>

    <a-card>
      <Trend flag="up" style="margin-right: 16px;">
        <span slot="term">工资</span>
        5%
      </Trend>
      <Trend flag="up" style="margin-right: 16px;">
        <span slot="term">工作量</span>
        50%
      </Trend>
      <Trend flag="down">
        <span slot="term">身体状态</span>
        50%
      </Trend>
    </a-card>

    <a-divider> 颜色反转 </a-divider>

    <a-card style="margin-bottom: 3rem">
      <Trend flag="up" :reverse-color="true" style="margin-right: 16px;">
        <span slot="term">工资</span>
        5%
      </Trend>
      <Trend flag="down" :reverse-color="true" style="margin-right: 16px;">
        <span slot="term">工作量</span>
        50%
      </Trend>
    </a-card>

    <h2># AvatarList 组件</h2>

    <a-divider> AvatarList </a-divider>
    <a-card style="margin-bottom: 3rem">
      <AvatarList :max-length="3">
        <AvatarListItem tips="Jake" src="https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png" />
        <AvatarListItem tips="Andy" src="https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png" />
        <AvatarListItem tips="Niko" src="https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png" />
        <AvatarListItem tips="Niko" src="https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png" />
        <AvatarListItem tips="Niko" src="https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png" />
        <AvatarListItem tips="Niko" src="https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png" />
        <AvatarListItem tips="Niko" src="https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png" />
      </AvatarList>

      <a-divider type="vertical" style="margin: 0 16px" />

      <AvatarList size="mini">
        <AvatarListItem tips="Jake" src="https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png" />
        <AvatarListItem tips="Andy" src="https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png" />
        <AvatarListItem tips="Niko" src="https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png" />
      </AvatarList>
    </a-card>

    <h2># CountDown 组件</h2>

    <a-divider> CountDown </a-divider>
    <a-card style="margin-bottom: 3rem">
      <CountDown style="font-size: 2rem" :target="new Date().getTime() + 3000000" :on-end="onEndHandle"> </CountDown>

      <a-divider type="vertical" style="margin: 0 16px" />

      <CountDown style="font-size: 2rem" :target="new Date().getTime() + 10000" :on-end="onEndHandle2"> </CountDown>
    </a-card>

    <h2># Ellipsis 组件</h2>

    <a-divider> Ellipsis </a-divider>
    <a-card style="margin-bottom: 3rem">
      <Ellipsis :length="100" tooltip>
        There were injuries alleged in three cases in 2015, and a fourth incident in September, according to the safety
        recall report. After meeting with US regulators in October, the firm decided to issue a voluntary recall.
      </Ellipsis>
    </a-card>

    <h2># NumberInfo 组件</h2>

    <a-divider> NumberInfo </a-divider>
    <a-card style="margin-bottom: 3rem">
      <NumberInfo
        :sub-title="
          () => {
            return 'Visits this week'
          }
        "
        :total="12321"
        status="up"
        :sub-total="17.1"
      ></NumberInfo>
    </a-card>

    <h2># TagSelect 组件</h2>

    <a-divider> TagSelect </a-divider>
    <a-card style="margin-bottom: 3rem">
      <TagSelect>
        <TagSelectOption value="cat1">类目1</TagSelectOption>
        <TagSelectOption value="cat2">类目2</TagSelectOption>
        <TagSelectOption value="cat3">类目3</TagSelectOption>
        <TagSelectOption value="cat4">类目4</TagSelectOption>
        <TagSelectOption value="cat5">类目5</TagSelectOption>
        <TagSelectOption value="cat6">类目6</TagSelectOption>
        <TagSelectOption value="cat7">类目7</TagSelectOption>
      </TagSelect>
    </a-card>

    <h2># DescriptionList 组件</h2>

    <a-divider> DescriptionList </a-divider>
    <a-card style="margin-bottom: 3rem">
      <DescriptionList title="组名称" size="small">
        <DescriptionListItem term="负责人">林东东</DescriptionListItem>
        <DescriptionListItem term="角色码">1234567</DescriptionListItem>
        <DescriptionListItem term="所属部门">XX公司-YY部</DescriptionListItem>
        <DescriptionListItem term="过期时间">2018-08-08</DescriptionListItem>
        <DescriptionListItem term="描述"
          >这段描述很长很长很长很长很长很长很长很长很长很长很长很长很长很长...</DescriptionListItem
        >
      </DescriptionList>
    </a-card>

    <a-divider> TagCloud </a-divider>
    <a-card style="margin-bottom: 3rem">
      <TagCloud :tag-list="tagCloudData"></TagCloud>
    </a-card>
  </div>
</template>

<script>
// @ is an alias to /src

import Trend from '@/components/Trend'
import AvatarList from '@/components/AvatarList'
import CountDown from '@/components/CountDown/CountDown'
import Ellipsis from '@/components/Ellipsis'
import NumberInfo from '@/components/NumberInfo'
import TagSelect from '@/components/TagSelect'
import { DescriptionList, TagCloud } from '@/components/'

const AvatarListItem = AvatarList.AvatarItem
const TagSelectOption = TagSelect.Option

const DescriptionListItem = DescriptionList.Item

export default {
  name: 'Home',
  components: {
    NumberInfo,
    Ellipsis,
    CountDown,
    Trend,
    AvatarList,
    AvatarListItem,
    TagSelect,
    TagSelectOption,
    TagCloud,
    DescriptionList,
    DescriptionListItem
  },
  data() {
    return {
      targetTime: new Date().getTime() + 3900000,
      tagCloudData: []
    }
  },
  created() {
    this.getTagCloudData()
  },
  methods: {
    onEndHandle() {
      this.$message.success('CountDown callback!!!')
    },
    onEndHandle2() {
      this.$notification.open({
        message: 'Notification Title',
        description:
          'This is the content of the notification. This is the content of the notification. This is the content of the notification.'
      })
    },
    getTagCloudData() {
      this.$http.get('/data/antv/tag-cloud').then(res => {
        this.tagCloudData = res.result
      })
    }
  }
}
</script>

<style scoped>
.home {
  width: 900px;
  margin: 0 auto;
  padding: 25px 0;
}
.home > .banner {
  text-align: center;
  padding: 25px 0;
  margin: 25px 0;
}
</style>
