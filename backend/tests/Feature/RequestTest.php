<?php

namespace Tests\Feature;

use Tests\TestCase;

class RequestTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_log_post_request() {
        $response = $this->post('/api/log');

        $response->assertStatus(201);
    }

    public function test_log_get_request() {
        $response = $this->get('/api/log');

        $response->assertStatus(200);
    }
}
