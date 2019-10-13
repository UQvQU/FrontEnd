<template>
  <div id="home_page">
    <NavigationBar/>
    <MainNavigation/>
    <LouPlus/>
    <Boutique/>
    <RecentlyRecommendCourse/>
    <BaseCourse/>
    <BackendCourse/>
    <CloudComputeBigDataCourse/>
    <TrainingCourse/>
    <LearningPath/>
    <SiteDescription/>
  </div>
</template>

<script type="text/ecmascript-6">
import NavigationBar from '@/components/home_page/navigation_bar.vue'
import MainNavigation from '@/components/home_page/main_navigation.vue'
import LouPlus from '@/components/home_page/lou_plus'
import Boutique from '@/components/home_page/boutique'
import RecentlyRecommendCourse from '@/components/home_page/recently_recommend_course'
import BaseCourse from '@/components/home_page/base_course'
import BackendCourse from '@/components/home_page/backend_course'
import CloudComputeBigDataCourse from '@/components/home_page/cloud_compute_big_data_course'
import TrainingCourse from '@/components/home_page/training_course'
import LearningPath from '@/components/home_page/learning_path'
import SiteDescription from '@/components/home_page/site_description'
export default {
  name: 'Home',
  data () {
    return {}
  },
  components: {
    NavigationBar,
    MainNavigation,
    LouPlus,
    Boutique,
    RecentlyRecommendCourse,
    BaseCourse,
    BackendCourse,
    CloudComputeBigDataCourse,
    TrainingCourse,
    LearningPath,
    SiteDescription
  }
}
</script>

<style scoped>
</style>
