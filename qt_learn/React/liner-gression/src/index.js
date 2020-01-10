import * as tf from '@tensorflow/tfjs';
import * as tfvis from '@tensorflow/tfjs-vis';

window.onload = async () => {
  const x = [1, 2, 3, 4]  // 5
  const y = [1, 3, 5, 7]  // 9
  tfvis.render.scatterplot(
    { name: '训练数据' },
    { values: x.map((xVal, i) => {
      return { x: xVal, y: y[i] }
    })}
  )
  // 新建一个模型
  const model = tf.sequential()
  model.add(tf.layers.dense({units: 1, inputShape: 1}))
  // 损失函数
  model.compile({
    loss: tf.losses.meanSquaredError,
    optimizer: tf.train.sgd(0.1)
  })
  const input = tf.tensor(x)
  const label = tf.tensor(y)
  await model.fit(input, label, {
    batchSize: 4,
    epochs: 100,
    callbacks: tfvis.show.fitCallbacks(
      {name: '过程'},
      ['loss']
    )
  })
  const a = tf.tensor([5])
  const output = model.predict(a)
  output.print()
}
